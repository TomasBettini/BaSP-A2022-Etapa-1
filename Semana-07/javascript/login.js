window.onload = function () {
    
    // Define variables
    var userEmail = document.getElementById("user-email");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var userPassword = document.getElementById("user-password");
    var button = document.getElementById("user-button");
    var userAccount = document.getElementById("user-account");

    // Create elements
    var emailDiv = document.createElement("div");
    var passwordDiv = document.createElement("div");
    var emailText = document.createElement("p");
    var passwordText = document.createElement("p");
    emailText.innerHTML = "Wrong Email";
    passwordText.innerHTML = "Wrong Password";
    emailText.classList.add("text-error");
    passwordText.classList.add("text-error");
    emailDiv.prepend(emailText);
    passwordDiv.prepend(passwordText);

    // Validate email
    function validateEmail (value) {
        if (emailExpression.test(value)) {
            return true;
        }
        return false;
    }

    // Validate password
    function validateNumberAndLetters (value) {
        var error = false;
        for (var i = 0; i < value.length; i++) {
            if (value[i].charCodeAt() < 65 && isNaN(value[i]) || 
                value[i].charCodeAt() > 90 && value[i].charCodeAt() < 97 || 
                value[i].charCodeAt() > 122) {
                error = true;
                break; 
            }
        }
        if (error) {
            return false;
        }
        return true; 
    }

    function validatePassword (value) {
        if (value.length < 8 || !validateNumberAndLetters(value)) {
            return false;
        }
        return true; 
    }
    
    // On blur event for email
    userEmail.onblur = function () {
        if (!validateEmail(userEmail.value) || userEmail.value === "") {
            userAccount.prepend(emailDiv);
            userEmail.classList.add("border-error", "text-error");
        }
    }

    // On focus event for email
    userEmail.onfocus = function () {
        if (!validateEmail(userEmail.value)) {
            emailDiv.remove();
            userEmail.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for password
    userPassword.onblur = function () {
        if (!validatePassword(userPassword.value)) {
            userAccount.prepend(passwordDiv);
            userPassword.classList.add("border-error", "text-error");
        }
    }

    // On focus event for password
    userPassword.onfocus = function () {
        if (!validatePassword(userPassword.value)){
            passwordDiv.remove();
            userPassword.classList.remove("border-error", "text-error");
        }
    }

    // On click event for button login
    button.onclick = function (e) {
        var error = false;
        var errorMessage = "";
        e.preventDefault();
        if (!validateEmail(userEmail.value)) {
            userEmail.classList.add("border-error", "text-error");
            userAccount.prepend(emailDiv);
            error = true;
            errorMessage = errorMessage.concat("Wrong Email\n");
        }
        if (!validatePassword(userPassword.value)) {
            userPassword.classList.add("border-error", "text-error");
            userAccount.prepend(passwordDiv);
            error = true;
            errorMessage = errorMessage.concat("Wrong Password");
        }
        if (error) {
            alert(errorMessage);
        } else {
            alert("Email: " + userEmail.value + "\nPassword: " + userPassword.value);
        }
    }
}