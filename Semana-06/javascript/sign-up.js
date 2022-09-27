window.onload = function () {

    // Define variables
    var userName = document.getElementById("user-name");
    var userLastName = document.getElementById("user-last-name");
    var userDNI = document.getElementById("user-dni");
    var userDateOfBirth = document.getElementById("user-date-birth");
    var userPhoneNumber = document.getElementById("user-phone-number");
    var userAddress = document.getElementById("user-address");
    var userLocation = document.getElementById("user-location");
    var userPostalCode = document.getElementById("user-postal-code");
    var userEmail = document.getElementById("user-email");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var userPassword = document.getElementById("user-password");
    var userConfirmPassword = document.getElementById("user-confirm-password");
    var button = document.getElementById("user-button");
    var userAccount = document.getElementById("user-account");

    // Create elements
    var nameDiv = document.createElement("div");
    var lastNameDiv = document.createElement("div");
    var dniDiv = document.createElement("div");
    var dateOfBirthDiv = document.createElement("div");
    var phoneNumberDiv = document.createElement("div");
    var addressDiv = document.createElement("div");
    var locationDiv = document.createElement("div");
    var postalCodeDiv = document.createElement("div");
    var emailDiv = document.createElement("div");
    var passwordDiv = document.createElement("div");
    var confirmPasswordDiv = document.createElement("div");
    var nameText = document.createElement("p");
    var lastNameText = document.createElement("p");
    var dniText = document.createElement("p");
    var dateOfBirthText = document.createElement("p");
    var phoneNumberText = document.createElement("p");
    var addressText = document.createElement("p");
    var locationText = document.createElement("p");
    var postalCodeText = document.createElement("p");
    var emailText = document.createElement("p");
    var passwordText = document.createElement("p");
    var confirmPasswordText = document.createElement("p");
    nameText.innerHTML = "Wrong Name";
    lastNameText.innerHTML = "Wrong Last Name";
    dniText.innerHTML = "Wrong DNI";
    dateOfBirthText.innerHTML = "Wrong Date of Birth";
    phoneNumberText.innerHTML = "Wrong Phone Number";
    addressText.innerHTML = "Wrong Address";
    locationText.innerHTML = "Wrong Location";
    postalCodeText.innerHTML = "Wrong Postal Code";
    emailText.innerHTML = "Wrong Email";
    passwordText.innerHTML = "Wrong Password";
    confirmPasswordText.innerHTML = "Wrong Confirm Password";
    nameText.classList.add("text-error");
    lastNameText.classList.add("text-error");
    dniText.classList.add("text-error");
    dateOfBirthText.classList.add("text-error");
    phoneNumberText.classList.add("text-error");
    addressText.classList.add("text-error");
    locationText.classList.add("text-error");
    postalCodeText.classList.add("text-error");
    emailText.classList.add("text-error");
    passwordText.classList.add("text-error");
    confirmPasswordText.classList.add("text-error");
    nameDiv.prepend(nameText);
    lastNameDiv.prepend(lastNameText);
    dniDiv.prepend(dniText);
    dateOfBirthDiv.prepend(dateOfBirthText);
    phoneNumberDiv.prepend(phoneNumberText);
    addressDiv.prepend(addressText);
    locationDiv.prepend(locationText);
    postalCodeDiv.prepend(postalCodeText);
    emailDiv.prepend(emailText);
    passwordDiv.prepend(passwordText);
    confirmPasswordDiv.prepend(confirmPasswordText);

    // Validate inputs
    // Create functions 
    function validateNumbersAndLetters (value) {
        var error = false;
        for (var i = 0; i < value.length; i++) {
            if (value[i].charCodeAt() < 65 && isNaN(value[i]) || 
                value[i].charCodeAt() > 90 && value[i].charCodeAt() < 97 || 
                value[i].charCodeAt() > 122
            ) {
                error = true;
                break; 
            }
        }
        if (error) {
            return false;
        }
        return true; 
    }

    function validateOnlyLetters (value) {
        var error = false;
        for (var i = 0; i < value.length; i++) {
            if (value[i].charCodeAt() < 65 || value[i].charCodeAt() > 90 && value[i].charCodeAt() < 97 || 
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

    function validateOnlyNumbers (value) {
        var error = false;
        for (var i = 0; i < value.length; i++) {
            if (isNaN(value[i])) {
                error = true;
                break; 
            }
        }
        if (error) {
            return false;
        }
        return true; 
    }

    // Validate name
    function validateName (value) {
        if (value.length < 4 || !validateOnlyLetters(value)) {
            return false;
        }
        return true; 
    }
    
    // Validate last name
    function validateLastName (value) {
        if (value.length < 4 || !validateOnlyLetters(value)) {
            return false;
        }
        return true; 
    }

    // Validate DNI
    function validateDni (value) {
        if (value.length < 8 || !validateOnlyNumbers(value)) {
            return false;
        }
        return true; 
    }

    // Validate phone number
    function validatePhoneNumber (value) {
        if (value.length !== 10 || !validateOnlyNumbers(value)) {
            return false;
        }
        return true; 
    }

    // Validate address
    function validateAddress (value) {
        if (value.length < 4 || !value.trim().includes(" ") || !validateNumbersAndLetters(value)) {
            return false;
        }
        return true; 
    }

    // Validate location
    function validateLocation (value) {
        if (value.length < 4 || !validateNumbersAndLetters(value)) {
            return false;
        }
        return true; 
    }

    // Validate postal code
    function validatePostalCode (value) {
        if (value.length !==4 && value.length !==5 || !validateOnlyNumbers(value)) {
            return false;
        }
        return true; 
    }

    // Validate email
    function validateEmail (value) {
        if (emailExpression.test(value)) {
            return true;
        }
        return false;
    }

    // Validate password
    function validatePassword (value) {
        if (value.length < 8 || !validateNumbersAndLetters(value)) {
            return false;
        }
        return true; 
    }

    // Validate confirm password
    function validateConfirmPassword (value) {
        if (value.length < 8 || !validateNumbersAndLetters(value) || value !== userPassword.value) {
            return false;
        }
        return true; 
    }
    
    // On blur event for name
    userName.onblur = function () {
        if (!validateName(userName.value)) {
            userAccount.prepend(nameDiv);
            userName.classList.add("border-error", "text-error");
        }
    }

    // On focus event for name
    userName.onfocus = function () {
        if (!validateName(userName.value)) {
            nameDiv.remove();
            userName.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for last name
    userLastName.onblur = function () {
        if (!validateLastName(userLastName.value)) {
            userAccount.prepend(lastNameDiv);
            userLastName.classList.add("border-error", "text-error");
        }
    }

    // On focus event for last name
    userLastName.onfocus = function () {
        if (!validateLastName(userLastName.value)) {
            lastNameDiv.remove();
            userLastName.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for DNI
    userDNI.onblur = function () {
        if (!validateDni(userDNI.value)) {
            userAccount.prepend(dniDiv);
            userDNI.classList.add("border-error", "text-error");
        }
    }

    // On focus event for DNI
    userDNI.onfocus = function () {
        if (!validateDni(userDNI.value)) {
            dniDiv.remove();
            userDNI.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for date of birth
    userDateOfBirth.onblur = function () {
        if (userDateOfBirth.value === "") {
            userAccount.prepend(dateOfBirthDiv);
            userDateOfBirth.classList.add("border-error", "text-error");
        }
    }

    // On focus event for date of birth
    userDateOfBirth.onfocus = function () {
        if (userDateOfBirth.value === "") {
            dateOfBirthDiv.remove();
            userDateOfBirth.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for phone number
    userPhoneNumber.onblur = function () {
        if (!validatePhoneNumber(userPhoneNumber.value)) {
            userAccount.prepend(phoneNumberDiv);
            userPhoneNumber.classList.add("border-error", "text-error");
        }
    }

    // On focus event for phone number
    userPhoneNumber.onfocus = function () {
        if (!validatePhoneNumber(userPhoneNumber.value)) {
            phoneNumberDiv.remove();
            userPhoneNumber.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for address
    userAddress.onblur = function () {
        if (!validateAddress(userAddress.value)) {
            userAccount.prepend(addressDiv);
            userAddress.classList.add("border-error", "text-error");
        }
    }

    // On focus event for address
    userAddress.onfocus = function () {
        if (!validateAddress(userAddress.value)) {
            addressDiv.remove();
            userAddress.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for location
    userLocation.onblur = function () {
        if (!validateLocation(userLocation.value)) {
            userAccount.prepend(locationDiv);
            userLocation.classList.add("border-error", "text-error");
        }
    }

    // On focus event for location
    userLocation.onfocus = function () {
        if (!validateLocation(userLocation.value)) {
            locationDiv.remove();
            userLocation.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for postal code
    userPostalCode.onblur = function () {
        if (!validatePostalCode(userPostalCode.value)) {
            userAccount.prepend(postalCodeDiv);
            userPostalCode.classList.add("border-error", "text-error");
        }
    }

    // On focus event for postal code
    userPostalCode.onfocus = function () {
        if (!validatePostalCode(userPostalCode.value)) {
            postalCodeDiv.remove();
            userPostalCode.classList.remove("border-error", "text-error");
        }
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
        if (!validatePassword(userPassword.value)) {
            passwordDiv.remove();
            userPassword.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for confirm password
    userConfirmPassword.onblur = function () {
        if (!validateConfirmPassword(userConfirmPassword.value)) {
            userAccount.prepend(confirmPasswordDiv);
            userConfirmPassword.classList.add("border-error", "text-error");
        }
    }

    // On focus event for password
    userConfirmPassword.onfocus = function () {
        if (!validateConfirmPassword(userConfirmPassword.value)) {
            confirmPasswordDiv.remove();
            userConfirmPassword.classList.remove("border-error", "text-error");
        }
    }
    
    // On click event for button sign in
    button.onclick = function (e) {
        e.preventDefault();
        var error = false;
        var errorMessage = "";
        if (!validateName(userName.value)) {
            userName.classList.add("border-error", "text-error");
            userAccount.prepend(nameDiv);
            error = true;
            errorMessage = errorMessage.concat("Wrong Name\n");
        }
        if (!validateLastName(userLastName.value)) {
            userLastName.classList.add("border-error", "text-error");
            userAccount.prepend(lastNameDiv);
            error = true;
            errorMessage = errorMessage.concat("Wrong Last Name\n");
        }
        if (!validateDni(userDNI.value)) {
            userDNI.classList.add("border-error", "text-error");
            userAccount.prepend(dniDiv);
            error = true;
            errorMessage = errorMessage.concat("Wrong DNI\n");
        }
        if (userDateOfBirth.value === "") {
            userAccount.prepend(dateOfBirthDiv);
            userDateOfBirth.classList.add("border-error", "text-error");
            error = true;
            errorMessage = errorMessage.concat("Wrong Date of Birth\n")
        }
        if (!validatePhoneNumber(userPhoneNumber.value)) {
            userPhoneNumber.classList.add("border-error", "text-error");
            userAccount.prepend(phoneNumberDiv);
            error = true;
            errorMessage = errorMessage.concat("Wrong Phone Number\n");
        }
        if (!validateAddress(userAddress.value)) {
            userAddress.classList.add("border-error", "text-error");
            userAccount.prepend(addressDiv);
            error = true;
            errorMessage = errorMessage.concat("Wrong Address\n");
        }
        if (!validateLocation(userLocation.value)) {
            userLocation.classList.add("border-error", "text-error");
            userAccount.prepend(locationDiv);
            error = true;
            errorMessage = errorMessage.concat("Wrong Location\n");
        }
        if (!validatePostalCode(userPostalCode.value)) {
            userPostalCode.classList.add("border-error", "text-error");
            userAccount.prepend(postalCodeDiv);
            error = true;
            errorMessage = errorMessage.concat("Wrong Postal Code\n");
        }
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
            errorMessage = errorMessage.concat("Wrong Password\n");
        }
        if (!validateConfirmPassword(userConfirmPassword.value)) {
            userConfirmPassword.classList.add("border-error", "text-error");
            userAccount.prepend(confirmPasswordDiv);
            error = true;
            errorMessage = errorMessage.concat("Wrong Confirm Password");
        }
        if (error) {
            alert(errorMessage);
        } else {
            alert("Name: " + userName.value + "\nLast Name: " + userLastName.value + "\nDNI: " + userDNI.value
            + "\nDate of Birth: " + userDateOfBirth.value + "\nPhone Number: " + userPhoneNumber.value 
            + "\nAddress: " + userAddress.value + "\nLocation: " + userLocation.value + "\nPostal Code: " + userPostalCode.value
            + "\nEmail: " + userEmail.value + "\nPassword: " + userPassword.value
            + "\nConfirm Password: " + userConfirmPassword.value);
        }
    }
}