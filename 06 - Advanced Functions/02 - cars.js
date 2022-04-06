function cars(arr) {
    let objects = {};
    let heritageLinks = {};

    for (let input of arr) {
        let tokens = input.split(' ');
        let command = tokens.shift();
        let nam = tokens.shift();
        let tokenSupp1 = tokens[0];
        let tokenSupp2 = tokens[1];

        switch (command) {
            case "create":
                if (tokenSupp1 == 'inherit') {
                    inheritance(nam, tokenSupp2);
                } else {
                    createParent(nam);
                }
                break;
            case "set":
                set(nam, tokenSupp1, tokenSupp2);
                break;
            case "print":
                print(nam)
                break;
        }
    }

    function createParent(n) {
        objects[n] = {};
    }

    function inheritance(n, p) {
        objects[n] = {};
        heritageLinks[n] = [p];
    }

    function set(n, key, value) {
        objects[n][key] = value;
    }

    function print(n) {
        check(n);
        

        console.log(Object.entries(objects[n])
            .map(element => element[0] + ':' + element[1])
            .join(','));
        
        function check(n){
            let heritageCheck = heritageLinks[n];
            while (heritageCheck != undefined){
                let inherits = (Object.entries(objects[heritageCheck]));
                for (let [key, value] of inherits) {
                    objects[n][key] = value
                }
                heritageCheck = heritageLinks[heritageCheck];
            }
        }
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])

console.log('-------------');

cars(['create pesho',
'create gosho inherit pesho',
'create stamat inherit gosho',
'set pesho rank number1',
'set gosho nick goshko',
'print stamat'])