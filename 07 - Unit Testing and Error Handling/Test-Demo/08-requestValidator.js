const { version } = require("chai");

function requestValidator(request) {
    let properties = ['method', 'uri', 'version', 'message'];
    let propsToPrint = ['Method', 'URI', 'Version', 'Message'];
    let specialChars = ['<', '>', '\\', '&', '\'', '\"'];
    for (let i = 0; i < 4; i++) {
        let propertyResult = request[properties[i]];
        if (propertyResult == undefined){
            throw new Error (`Invalid request header: Invalid ${propsToPrint[i]}`);
            return;
        }

        switch (properties[i]) {
            case "method":
                if (propertyResult != 'GET'&& propertyResult != 'POST'&& propertyResult != 'DELETE'&& propertyResult != 'CONNECT'){
                    throw Error (`Invalid request header: Invalid ${propsToPrint[i]}`);
                    return;
                }
                break;
            case "uri":
                if (propertyResult.length == 0 || (propertyResult.length == 1 && propertyResult != '*')){
                    throw new Error (`Invalid request header: Invalid ${propsToPrint[i]}`);
                    return;
                }
                let uriArr = propertyResult.split('.');
                for (let part of uriArr){
                    let uriPattern = /^[a-zA-Z0-9]+$/g;
                    let match = part.match(uriPattern);
                    if (match == null){
                        throw new Error (`Invalid request header: Invalid ${propsToPrint[i]}`);
                        return;
                    }
                }
                break;
            case "version":
                if (propertyResult != 'HTTP/0.9'&& propertyResult != 'HTTP/1.0'&& propertyResult != 'HTTP/1.1'&& propertyResult != 'HTTP/2.0'){
                    throw Error (`Invalid request header: Invalid ${propsToPrint[i]}`);
                    return;
                }
                break;
            case "message":
                for (let char of propertyResult){
                    if (char == '<' || char == '>' || char == '\\' || char == '&' || char == '\'' || char == '\"'){
                        throw Error (`Invalid request header: Invalid ${propsToPrint[i]}`);
                        return;
                    }
                }
                break;
        }
    }
    return request;
}
requestValidator({
    method: 'DELETE',
    // uri: 'svnpubliccatalog',
    uri: 'svnlic.catalog',
    version: 'HTTP/2.0',
    message: 'ab&cd'
})