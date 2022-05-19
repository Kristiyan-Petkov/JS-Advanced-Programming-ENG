function validate() {
    const emailField = document.querySelector("#email");
    emailField.addEventListener('change', checkEmail);
    function checkEmail(e){
        const entry = emailField.value;
        const pattern = /^[a-z]+\@[a-z]+.[a-z]+$/g;
        const rgxResult = entry.match(pattern);
        if (rgxResult == null){
            e.target.className = "error";
        } else {
            e.target.className = "";
        }
    }
}