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
    var modal = document.getElementById("modal");
    var modalTitle = document.getElementById("modal-title");
    var buttonCloseModal = document.getElementById("close-modal");
    var modalText = document.getElementById("modal-text");
    var understandButton = document.getElementById("understand-button");

    // Create elements
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
    nameText.innerHTML = "The name must only contain letters";
    lastNameText.innerHTML = "The last name must only contain letters";
    dniText.innerHTML = "The ID must have 7 or 8 numbers";
    dateOfBirthText.innerHTML = "You must be over 18 years old";
    phoneNumberText.innerHTML = "The phone number must have 10 numbers";
    addressText.innerHTML = "The address must contain letters, numbers and a space in between";
    locationText.innerHTML = "The location must contain letters";
    postalCodeText.innerHTML = "The postal code must contain letters, numbers";
    emailText.innerHTML = "Email format must be valid";
    passwordText.innerHTML = "The password must contain numbers and letters";
    confirmPasswordText.innerHTML = "Passwords do not match";
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

    // Validate inputs
    // Create functions 
    function hasNumbersAndLetters (value) {
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

    function hasLettersContainNumbers (value) {
        var error = false;
        var hasLetter = false;
        for (var i = 0; i < value.length; i++) {
            if (value[i].charCodeAt() < 65 && isNaN(value[i]) || 
                value[i].charCodeAt() > 90 && value[i].charCodeAt() < 97 || 
                value[i].charCodeAt() > 122) {
                error = true;
                break; 
            }
            if (value[i].charCodeAt() >= 65 && value[i].charCodeAt() <= 90 ||
                value[i].charCodeAt() >= 97 && value[i].charCodeAt() <= 122) {
                hasLetter = true;
            }
        }
        if (error || !hasLetter) {
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

    // Function signUp
    function signUp (name, lastName, dni, dob, phone, address, city, zip, email, password) {
    var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup?name=" + name + "&lastName=" + lastName
        + "&dni=" + dni + "&dob=" + dob + "&phone=" + phone + "&address=" + address + "&city=" + city 
        + "&zip=" + zip + "&email=" + email + "&password=" + password;
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            if (res.success) {
                saveLocalStorage(res);
                modalTitle.innerText = "Successful request: " + res.msg
                modalText.innerText = "\nName: " + name + "\nLast Name: " + lastName + "\nDNI: " + dni +
                "\nDate of Birth: " + dob + "\nPhone Number: " + phone + "\nAddress: " + address +
                "\nLocation: " + city + "\nPostal Code: " + zip + "\nEmail: " + email + "\nPassword: " + password;
                showModal();
            } else {
                modalTitle.innerText = "Error request: " + res.msg
                modalText.innerText = "\nPlease check your information:" + "\nName: " + name + "\nLast Name: " + lastName + "\nDNI: " + dni +
                "\nDate of Birth: " + dob + "\nPhone Number: " + phone + "\nAddress: " + address +
                "\nLocation: " + city + "\nPostal Code: " + zip + "\nEmail: " + email + "\nPassword: " + password;
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
    
    // Function save in local storage
    function saveLocalStorage (res) {
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("lastName", res.data.lastName);
        localStorage.setItem("dni", res.data.dni);
        localStorage.setItem("dob", res.data.dob);
        localStorage.setItem("phone", res.data.phone);
        localStorage.setItem("address", res.data.address);
        localStorage.setItem("city", res.data.city);
        localStorage.setItem("zip", res.data.zip);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("password", res.data.password);
        localStorage.setItem("confirmPassword", userConfirmPassword.value);
    }
    
    // Set values of local storage in the form
    function formValues () {
        if (!localStorage.getItem("name") && !localStorage.getItem("lastName") && !localStorage.getItem("dni") &&
            !localStorage.getItem("dob") && !localStorage.getItem("phone") && !localStorage.getItem("address") &&
            !localStorage.getItem("city") && !localStorage.getItem("zip") && !localStorage.getItem("email") &&
            !localStorage.getItem("password") && !localStorage.getItem("confirmPassword")) {
            return true;
        }
        var correctDob = localStorage.getItem("dob");
        var correctDobSplit = correctDob.split("/");
        userName.value = localStorage.getItem("name");
        userLastName.value = localStorage.getItem("lastName");
        userDNI.value = localStorage.getItem("dni");
        userDateOfBirth.value = correctDobSplit[2] + "-" + correctDobSplit[0] + "-" + correctDobSplit[1];
        userPhoneNumber.value = localStorage.getItem("phone");
        userAddress.value = localStorage.getItem("address");
        userLocation.value = localStorage.getItem("city");
        userPostalCode.value = localStorage.getItem("zip");
        userEmail.value = localStorage.getItem("email");
        userPassword.value = localStorage.getItem("password");
        userConfirmPassword.value = localStorage.getItem("confirmPassword");
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
        if (value.length !== 7 && value.length !== 8 || !validateOnlyNumbers(value)) {
            return false;
        }
        return true; 
    }

    // Validate date of birth
    var newDate = "";
    function validateDateOfBirth (value) {
        var splitvalue = value.split("-");
        var year = splitvalue[0];
        var month = splitvalue[1];
        var day = splitvalue[2];
        newDate = month + "/" + day + "/" + year;
        if (value === "" || year > 2004 || year < 1900) {
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
        if (value.length < 4 || !value.trim().includes(" ") || !hasNumbersAndLetters(value)) {
            return false;
        }
        return true; 
    }

    // Validate location
    function validateLocation (value) {
        if (value.length < 4 || !hasLettersContainNumbers(value)) {
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
        if (value.length < 8 || !hasNumbersAndLetters(value)) {
            return false;
        }
        return true; 
    }

    // Validate confirm password
    function validateConfirmPassword (value) {
        if (value.length < 8 || !hasNumbersAndLetters(value) || value !== userPassword.value) {
            return false;
        }
        return true; 
    }
    
    // On blur event for name
    userName.onblur = function () {
        if (!validateName(userName.value)) {
            userName.parentNode.appendChild(nameText);
            userName.classList.add("border-error", "text-error");
        }
    }

    // On focus event for name
    userName.onfocus = function () {
        if (!validateName(userName.value)) {
            nameText.remove();
            userName.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for last name
    userLastName.onblur = function () {
        if (!validateLastName(userLastName.value)) {
            userLastName.parentNode.appendChild(lastNameText);
            userLastName.classList.add("border-error", "text-error");
        }
    }

    // On focus event for last name
    userLastName.onfocus = function () {
        if (!validateLastName(userLastName.value)) {
            lastNameText.remove();
            userLastName.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for DNI
    userDNI.onblur = function () {
        if (!validateDni(userDNI.value)) {
            userDNI.parentNode.appendChild(dniText);
            userDNI.classList.add("border-error", "text-error");
        }
    }

    // On focus event for DNI
    userDNI.onfocus = function () {
        if (!validateDni(userDNI.value)) {
            dniText.remove();
            userDNI.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for date of birth
    userDateOfBirth.onblur = function () {
        if (!validateDateOfBirth(userDateOfBirth.value)) {
            userDateOfBirth.parentNode.appendChild(dateOfBirthText);
            userDateOfBirth.classList.add("border-error", "text-error");
        }
    }

    // On focus event for date of birth
    userDateOfBirth.onfocus = function () {
        if (!validateDateOfBirth(userDateOfBirth.value)) {
            dateOfBirthText.remove();
            userDateOfBirth.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for phone number
    userPhoneNumber.onblur = function () {
        if (!validatePhoneNumber(userPhoneNumber.value)) {
            userPhoneNumber.parentNode.appendChild(phoneNumberText);
            userPhoneNumber.classList.add("border-error", "text-error");
        }
    }

    // On focus event for phone number
    userPhoneNumber.onfocus = function () {
        if (!validatePhoneNumber(userPhoneNumber.value)) {
            phoneNumberText.remove();
            userPhoneNumber.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for address
    userAddress.onblur = function () {
        if (!validateAddress(userAddress.value)) {
            userAddress.parentNode.appendChild(addressText);
            userAddress.classList.add("border-error", "text-error");
        }
    }

    // On focus event for address
    userAddress.onfocus = function () {
        if (!validateAddress(userAddress.value)) {
            addressText.remove();
            userAddress.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for location
    userLocation.onblur = function () {
        if (!validateLocation(userLocation.value)) {
            userLocation.parentNode.appendChild(locationText);
            userLocation.classList.add("border-error", "text-error");
        }
    }

    // On focus event for location
    userLocation.onfocus = function () {
        if (!validateLocation(userLocation.value)) {
            locationText.remove();
            userLocation.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for postal code
    userPostalCode.onblur = function () {
        if (!validatePostalCode(userPostalCode.value)) {
            userPostalCode.parentNode.appendChild(postalCodeText);
            userPostalCode.classList.add("border-error", "text-error");
        }
    }

    // On focus event for postal code
    userPostalCode.onfocus = function () {
        if (!validatePostalCode(userPostalCode.value)) {
            postalCodeText.remove();
            userPostalCode.classList.remove("border-error", "text-error");
        }
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
        if (!validatePassword(userPassword.value)) {
            passwordText.remove();
            userPassword.classList.remove("border-error", "text-error");
        }
    }

    // On blur event for confirm password
    userConfirmPassword.onblur = function () {
        if (!validateConfirmPassword(userConfirmPassword.value)) {
            userConfirmPassword.parentNode.appendChild(confirmPasswordText);
            userConfirmPassword.classList.add("border-error", "text-error");
        }
    }

    // On focus event for password
    userConfirmPassword.onfocus = function () {
        if (!validateConfirmPassword(userConfirmPassword.value)) {
            confirmPasswordText.remove();
            userConfirmPassword.classList.remove("border-error", "text-error");
        }
    }

    // Complete the form with the information of the local storage
    formValues();

    // On click event for modal
    buttonCloseModal.onclick = function () {
        closeModal();
    }

    understandButton.onclick = function () {
        closeModal();
    }
    
    // On click event for button sign in
    button.onclick = function (e) {
        e.preventDefault();
        var error = false;
        var errorMessage = "";
        if (!validateName(userName.value)) {
            userName.classList.add("border-error", "text-error");
            userName.parentNode.appendChild(nameText);
            error = true;
            errorMessage = errorMessage.concat("Wrong Name\n");
        }
        if (!validateLastName(userLastName.value)) {
            userLastName.classList.add("border-error", "text-error");
            userLastName.parentNode.appendChild(lastNameText);
            error = true;
            errorMessage = errorMessage.concat("Wrong Last Name\n");
        }
        if (!validateDni(userDNI.value)) {
            userDNI.classList.add("border-error", "text-error");
            userDNI.parentNode.appendChild(dniText);
            error = true;
            errorMessage = errorMessage.concat("Wrong DNI\n");
        }
        if (!validateDateOfBirth(userDateOfBirth.value)) {
            userDateOfBirth.parentNode.appendChild(dateOfBirthText);
            userDateOfBirth.classList.add("border-error", "text-error");
            error = true;
            errorMessage = errorMessage.concat("Wrong Date of Birth\n")
        }
        if (!validatePhoneNumber(userPhoneNumber.value)) {
            userPhoneNumber.classList.add("border-error", "text-error");
            userPhoneNumber.parentNode.appendChild(phoneNumberText);
            error = true;
            errorMessage = errorMessage.concat("Wrong Phone Number\n");
        }
        if (!validateAddress(userAddress.value)) {
            userAddress.classList.add("border-error", "text-error");
            userAddress.parentNode.appendChild(addressText);
            error = true;
            errorMessage = errorMessage.concat("Wrong Address\n");
        }
        if (!validateLocation(userLocation.value)) {
            userLocation.classList.add("border-error", "text-error");
            userLocation.parentNode.appendChild(locationText);
            error = true;
            errorMessage = errorMessage.concat("Wrong Location\n");
        }
        if (!validatePostalCode(userPostalCode.value)) {
            userPostalCode.classList.add("border-error", "text-error");
            userPostalCode.parentNode.appendChild(postalCodeText);
            error = true;
            errorMessage = errorMessage.concat("Wrong Postal Code\n");
        }
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
            errorMessage = errorMessage.concat("Wrong Password\n");
        }
        if (!validateConfirmPassword(userConfirmPassword.value)) {
            userConfirmPassword.classList.add("border-error", "text-error");
            userConfirmPassword.parentNode.appendChild(confirmPasswordText);
            error = true;
            errorMessage = errorMessage.concat("Wrong Confirm Password");
        }
        if (error) {    
            modalTitle.innerText = "Error";
            modalText.innerText = errorMessage;
            showModal();
        } else {
            signUp(userName.value, userLastName.value, userDNI.value, newDate, userPhoneNumber.value,
            userAddress.value, userLocation.value, userPostalCode.value, userEmail.value, userPassword.value);
        }
    }
}