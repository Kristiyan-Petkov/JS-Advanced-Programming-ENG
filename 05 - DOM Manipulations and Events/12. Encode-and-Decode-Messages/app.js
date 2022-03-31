function encodeAndDecodeMessages() {
    let encodeButton = document.querySelector("#main > div:nth-child(1) > button");
    let decodeButton = document.querySelector("#main > div:nth-child(2) > button");
    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);
    
    let receiverArea = document.querySelector("#main > div:nth-child(2) > textarea");

    function encode (e){
        let initialMessage = document.querySelector("#main > div:nth-child(1) > textarea");
        let message = initialMessage.value;
        let encodedMessage = message
            .split('')
            .map(a => a.charCodeAt() + 1)
            .map(a => String.fromCharCode(a));
        receiverArea.textContent = encodedMessage.join('');
        initialMessage.value = '';
    }

    function decode (e){
        let cripted = receiverArea.textContent
        let decodedMessage = cripted
            .split('')
            .map(a => a.charCodeAt() - 1)
            .map(a => String.fromCharCode(a));
        receiverArea.textContent = decodedMessage.join('');
    }
}