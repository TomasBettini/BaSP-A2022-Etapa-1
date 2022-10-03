window.onload = function () {
    
    // Define variables
    var userEmail = document.getElementById("user-email");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var userPassword = document.getElementById("user-password");
    var button = document.getElementById("user-button");

    // Create elements
    var emailText = document.createElement("p");
    var passwordText = document.createElement("p");
    emailText.innerHTML = "Email format must be valid";
    passwordText.innerHTML = "The password must contain numbers and letters";
    emailText.classList.add("text-error");
    passwordText.classList.add("text-error");

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
        var hasNumber = false;
        var hasLetter = false;
        for (var i = 0; i < value.length; i++) {
            if (value[i].charCodeAt() < 65 && isNaN(value[i]) || 
                value[i].charCodeAt() > 90 && value[i].charCodeAt() < 97 || 
                value[i].charCodeAt() > 122) {
                error = true;
                break; 
            }
            if (!isNaN(value[i])) {
                hasNumber = true;
                continue;
            }
            if (value[i].charCodeAt() >= 65 && value[i].charCodeAt() <= 90 ||
                value[i].charCodeAt() >= 97 && value[i].charCodeAt() <= 122) {
                hasLetter = true;
                continue;
            }
        }
        if (error || !hasLetter || !hasNumber) {
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

    // Function login
    function login (email, password) {
        var url = "https://basp-m2022-api-rest-server.herokuapp.com/login?email=" + email + "&password=" + password;
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            if (res.success) {
                alert("Welcome " + email + "\nThe result of your request: " + res.msg);
            } else {
                alert("Error!\n" + "The result of your request: " + res.msg)
            }
        })
        .catch(function(error) {
            alert("Error!\n" + error);
        })
    }
    
    // On blur event for email
    userEmail.onblur = function () {
        if (!validateEmail(userEmail.value) || userEmail.value === "") {
            userEmail.parentNode.appendChild(emailText);
            userEmail.classList.add("border-error", "text-error");
        }
    }

    // On focus event for email
    userEmail.onfocus = function () {
        if (!validateEmail(userEmail.value)) {
            emailText.remove();
            userEmail.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for password
    userPassword.onblur = function () {
        if (!validatePassword(userPassword.value)) {
            userPassword.parentNode.appendChild(passwordText);
            userPassword.classList.add("border-error", "text-error");
        }
    }

    // On focus event for password
    userPassword.onfocus = function () {
        if (!validatePassword(userPassword.value)){
            passwordText.remove();
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
            userEmail.parentNode.appendChild(emailText);
            error = true;
            errorMessage = errorMessage.concat("Wrong Email\n");
        }
        if (!validatePassword(userPassword.value)) {
            userPassword.classList.add("border-error", "text-error");
            userPassword.parentNode.appendChild(passwordText);
            error = true;
            errorMessage = errorMessage.concat("Wrong Password");
        }
        if (error) {
            alert(errorMessage);
        } else {
            login(userEmail.value, userPassword.value);
        }
    }
}