function validate() {
    const isCompany = document.querySelector("#company");
    const companyDetails = document.querySelector("#companyInfo");
    const submitButton = document.querySelector("#submit");
    submitButton.setAttribute("onclick", "return false");
    submitButton.addEventListener('click', submit)
    isCompany.addEventListener('change', companyCheckbox);

    function companyCheckbox(e) {
        if (e.target.checked) {
            companyDetails.style.display = "block"
        } else {
            companyDetails.style.display = "none"
        }
    }

    function submit() {
        let hasIvalidInput = false;
        //check username
        let usernameField = document.querySelector("#username");
        let username = usernameField.value;
        let namePattern = /^[A-Za-z0-9]{3,20}$/g;
        let rgxResult = username.match(namePattern);
        if (rgxResult == null) {
            usernameField.style.borderColor = "red";
            hasIvalidInput = true;
        } else {
            usernameField.style.border = "none";
        }
        //check email
        let emailField = document.querySelector("#email");
        let email = emailField.value;
        let emailPattern = /@.*?\./g;
        let emailRgxResult = email.match(emailPattern);
        if (emailRgxResult == null) {
            emailField.style.borderColor = "red";
            hasIvalidInput = true;
        } else {
            emailField.style.border = "none";
        }
        //check password and confrim-password
        let passField = document.querySelector("#password");
        let confirmPassField = document.querySelector("#confirm-password");
        let confirmPass = confirmPassField.value;
        let pass = passField.value;
        let passPattern = /^\w{5,15}$/g;
        let passRgxResult = pass.match(passPattern);
        if (passRgxResult == null) {
            passField.style.borderColor = "red";
            confirmPassField.style.borderColor = "red";
            hasIvalidInput = true;
        } else if (pass != confirmPass) {
            passField.style.borderColor = "red";
            confirmPassField.style.borderColor = "red";
            hasIvalidInput = true;
        } else {
            passField.style.border = "none";
            confirmPassField.style.border = "none";
        }

        //check if company & company info
        if (isCompany.checked){
            let companyNumberField = document.querySelector("#companyNumber");
            let companyNumber = companyNumberField.value;
            if (companyNumber >= 1000 && companyNumber <= 10000){
                companyNumberField.style.border = "none";
            } else {
                companyNumberField.style.borderColor = "red";
                hasIvalidInput = true;
            }

            // show final validation
            if (hasIvalidInput == false){
                let allIsValid = document.querySelector("#valid");
                allIsValid.style.display = "block"
            }
        }
    }
}
