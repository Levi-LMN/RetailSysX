(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$(".toggle-password").click(function() {

	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});

})(jQuery);



document.getElementById("loginForm").addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent the form from submitting

	var username = document.getElementById("username").value;
	var password = document.getElementById("password-field").value;

	if (username === "user@gmail.com" && password === "user123!") {
		window.location.href = "../../../templates/index.html"; // Redirect to index.html for user
	} else if (username === "admin@gmail.com" && password === "admin123!") {
		window.location.href = "../../../online_retail_system/Frontend_RetailSysX/admin_panel/index.html"; // Redirect to admin.html for admin
	} else {
		alert("Invalid username or password. Please try again."); // Show an error message for incorrect credentials
	}
});

// Toggle password visibility
var passwordField = document.getElementById("password-field");
var togglePassword = document.querySelector(".toggle-password");

togglePassword.addEventListener("click", function() {
	var fieldType = passwordField.getAttribute("type") === "password" ? "text" : "password";
	passwordField.setAttribute("type", fieldType);
});