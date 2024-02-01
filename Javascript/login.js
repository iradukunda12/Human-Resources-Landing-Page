let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let nameField2 = document.getElementById("nameField2");
let formbox = document.getElementById("form-box");
let title = document.getElementById("title");
let loginBtn = document.getElementById("loginBtn");

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  nameField2.style.maxHeight = "0";
  nameField3.style.maxHeight = "0";
  nameField4.style.maxHeight = "0";
  nameField5.style.maxHeight = "0";

  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
  loginBtn.innerHTML = "Login";
};



signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  nameField2.style.maxHeight = "60px";
  nameField3.style.maxHeight = "60px";
  nameField4.style.maxHeight = "60px";
  nameField5.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
  loginBtn.innerHTML = "Sign Up";
};




//this is for validating the forms
 document.addEventListener('DOMContentLoaded', function () {
            // Validation logic goes here
            const signupForm = document.getElementById('signupForm');
            const firstname = document.querySelector('#nameField input');
            const lastname = document.querySelector('#nameField2 input');
            const email = document.querySelector('.input-field:nth-child(3) input');
            const password = document.querySelector('.input-field:nth-child(4) input');
            const confirmPassword = document.querySelector('.input-field:nth-child(5) input');
            const phoneNumber = document.querySelector('#nameField5 input');
            const country = document.querySelector('#nameField3 input');
            const address = document.querySelector('#nameField4 input');

            const firstnameError = document.getElementById('firstnameError');
            const lastnameError = document.getElementById('lastnameError');
            const emailError = document.getElementById('emailError');
            const passwordError = document.getElementById('passwordError');
            const confirmPasswordError = document.getElementById('confirmpasswordError');
            const phoneNumberError = document.getElementById('phoneNumberError');
            const countryError = document.getElementById('countryError');
            const addressError = document.getElementById('addressError');

            function validateForm() {
                // Reset errors
                firstnameError.textContent = '';
//                lastnameError.textContent = '';
                emailError.textContent = '';
                passwordError.textContent = '';
                confirmPasswordError.textContent = '';
                phoneNumberError.textContent = '';
                countryError.textContent = '';
                addressError.textContent = '';

                // Example regex patterns (you may need to adjust them based on your requirements)
                const nameRegex = /^[A-Za-z]+$/;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
                const phoneNumberRegex = /^\d{10}$/;

                // Validate Firstname
                if (!nameRegex.test(firstname.value.trim())) {
                    firstnameError.textContent = 'Invalid Firstname';
                     firstnameError.style.color = 'red';
                     firstnameError.style.fontWeight = 'bold';
                }

                // Validate Lastname
                if (!nameRegex.test(lastname.value.trim())) {
                    lastnameError.textContent = 'Invalid Lastname';
                      lastnameError.style.color = 'red';
                     lastnameError.style.fontWeight = 'bold';
                }

                // Validate Email
                if (!emailRegex.test(email.value.trim())) {
                    emailError.textContent = 'Invalid Email';
                     emailError.style.color = 'red';
                     emailError.style.fontWeight = 'bold';
                }

                // Validate Password
                if (!passwordRegex.test(password.value)) {
                    passwordError.textContent = "Password must be at least 8 characters";
                    passwordError.style.color = 'red';
                    passwordError.style.fontWeight = 'bold';
                }

                // Validate Confirm Password
                if (password.value !== confirmPassword.value) {
                    confirmPasswordError.textContent = 'Passwords do not match';
                    confirmPasswordError.style.color = 'red';
                     confirmPasswordError.style.fontWeight = 'bold';
                }

                // Validate Phone Number
                if (!phoneNumberRegex.test(phoneNumber.value.trim())) {
                    phoneNumberError.textContent = 'Invalid Phone Number (10 digits)';
                    phoneNumberError.style.color = 'red';
                    phoneNumberError.style.fontWeight = 'bold';
                }

                // Validate Country (you may need a different validation logic)
                if (country.value.trim() === '') {
                    countryError.textContent = 'Country is required';
                    countryError.style.color = 'red';
                    countryError.style.fontWeight = 'bold';
                }

                // Validate Address (you may need a different validation logic)
                if (address.value.trim() === '') {
                    addressError.textContent = 'Address is required';
                    addressError.style.color = 'red';
                    addressError.style.fontWeight = 'bold';
                }

                // Example: If no errors, submit the form
                if (firstnameError.textContent === '' &&
//                    lastnameError.textContent === '' &&
                    emailError.textContent === '' &&
                    passwordError.textContent === '' &&
                    confirmPasswordError.textContent === '' &&
                    phoneNumberError.textContent === '' &&
                    countryError.textContent === '' &&
                    addressError.textContent === '') {
                    alert('Form submitted successfully');
//                     You can uncomment the line below to submit the form
                     signupForm.submit();
                }
            }

            // Event listener for the "Create Account" button
            document.getElementById('loginBtn').addEventListener('click', validateForm);
        });
//
//         document.addEventListener('DOMContentLoaded', function () {
//                    // Validation logic goes here
//                    const signupForm = document.getElementById('signupForm');
//                    const firstname = document.querySelector('#nameField input');
//                    const lastname = document.querySelector('#nameField2 input');
//                    const email = document.querySelector('.input-field:nth-child(3) input');
//                    const password = document.querySelector('.input-field:nth-child(4) input');
//                    const confirmPassword = document.querySelector('.input-field:nth-child(5) input');
//                    const phoneNumber = document.querySelector('#nameField5 input');
//                    const country = document.querySelector('#nameField3 input');
//                    const address = document.querySelector('#nameField4 input');
//
////                    const showError = (element, message) => {
////                        const errorDiv = document.getElementById(`${element.id}Error`);
////                        errorDiv.innerHTML = ` ${message}`;
////                    };
////
////                    const clearError = (element) => {
////                        const errorDiv = document.getElementById(`${element.id}Error`);
////                        errorDiv.innerHTML = '';
////                    };
//const showError = (element, message) => {
//    const errorDiv = document.getElementById(`${element.id}Error`);
//    // Check if the errorDiv exists before setting innerHTML
//    if (errorDiv) {
//        errorDiv.innerHTML = `<i class="fa-solid fa-exclamation-circle"></i> ${message}`;
//    }
//};
//
//const clearError = (element) => {
//    const errorDiv = document.getElementById(`${element.id}Error`);
//    // Check if the errorDiv exists before setting innerHTML to an empty string
//    if (errorDiv) {
//        errorDiv.innerHTML = '';
//    }
//};
//
//
//                    const validateField = (element, regex, errorMessage) => {
//                        if (!regex.test(element.value.trim())) {
//                            showError(element, errorMessage);
//                        } else {
//                            clearError(element);
//                        }
//                    };
//
//                    const validateForm = () => {
//                        const nameRegex = /^[A-Za-z]+$/;
//                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//                        const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
//                        const phoneNumberRegex = /^\d{10}$/;
//
//                        validateField(firstname, nameRegex, 'Invalid Firstname');
//                        validateField(lastname, nameRegex, 'Invalid Lastname');
//                        validateField(email, emailRegex, 'Invalid Email');
//                        validateField(password, passwordRegex, 'Password must be at least 8 characters and contain at least one letter and one number');
//                        validateField(confirmPassword, passwordRegex, 'Password must be at least 8 characters and contain at least one letter and one number');
//                        validateField(phoneNumber, phoneNumberRegex, 'Invalid Phone Number (10 digits)');
//                        validateField(country, /.+/, 'Country is required');
//                        validateField(address, /.+/, 'Address is required');
//                    };
//
//                    // Event listener for the "Create Account" button
//                    document.getElementById('loginBtn').addEventListener('click', validateForm);
//                });