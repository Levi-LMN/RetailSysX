function togglePassword(passwordFieldId, iconClass) {
    var passwordField = document.getElementById(passwordFieldId);
    var icon = document.querySelector(iconClass);

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function validateAndSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    var password = document.getElementById("new_password").value;
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!regex.test(password)) {
        alert("Password must contain at least one number, one uppercase letter, one lowercase letter, and be at least 8 characters long.");
    } else {
        // Submit the form
        fetch('/add_user', {
            method: 'POST',
            body: new FormData(document.getElementById('addUserForm')),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            alert(data.message);
            if (data.success) {
                // Additional actions on success
                document.getElementById('addUserForm').reset(); // Clear the form
            } else {
                // Additional actions on failure
                document.getElementById('new_username').focus(); // Focus on the username field
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle the error gracefully, e.g., show an alert
            alert('An error occurred. Please try again.');
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('addUserForm').addEventListener('submit', validateAndSubmit);
});



// admin panel login js
function sendOTP() {
        var email = document.getElementById('email').value;

        // Use fetch API to call the Flask endpoint for sending OTP
        fetch('/send-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'email': email,
            }),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.success ? data.message : "Error sending OTP.");
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error sending OTP.");
        });
    }

   function verifyOTP() {
    var email = document.getElementById('email').value;
    var otp = document.getElementById('otp').value;

    // Use fetch API to call the Flask endpoint for verifying OTP
    fetch('/verify-otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'email': email,
            'otp': otp,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Authentication successful, redirect to main.html
            window.location.href = '/main';
        } else {
            // Handle authentication failure
            alert("Error verifying OTP: " + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error verifying OTP.");
    });
}