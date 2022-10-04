window.onload = function () {
    
    // Define variables
    var userEmail = document.getElementById("user-email");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var userPassword = document.getElementById("user-password");
    var button = document.getElementById("user-button");
    var modal = document.getElementById("modal");
    var modalTitle = document.getElementById("modal-title");
    var buttonCloseModal = document.getElementById("close-modal");
    var modalText = document.getElementById("modal-text");
    var understandButton = document.getElementById("understand-button");

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
                modalTitle.innerText = "Request completed successfully";
                modalText.innerText = res.msg;
                showModal();
            } else {
                modalTitle.innerText = "Error!";
                modalText.innerText = res.msg;
                showModal();
            }
        })
        .catch(function(error) {
            modalTitle.innerText = "Error!";
            modalText.innerText = error;
            showModal();
        })
    }

    // Modal functions
    function showModal() {
        modal.classList.remove("hidden");
        modal.classList.add("show");
    }

    function closeModal() {
        modal.classList.remove("show");
        modal.classList.add("hidden");
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

    // On click event for modal
    buttonCloseModal.onclick = function () {
        closeModal();
    }

    understandButton.onclick = function () {
        closeModal();
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
            modalTitle.innerText = "Error";
            modalText.innerText = errorMessage;
            showModal();
        } else {
            login(userEmail.value, userPassword.value);
        }
    }
}