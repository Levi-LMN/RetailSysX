// Function to show the loading spinner
function showLoadingSpinner() {
  $('#loadingSpinner').css('display', 'block');
}

// Function to hide the loading spinner
function hideLoadingSpinner() {
  $('#loadingSpinner').css('display', 'none');
}

// Function to check for flash messages and display them as alerts
function displayFlashMessages() {
  // Use AJAX to fetch flash messages from the server
  $.ajax({
    url: '/get_flash_messages',
    type: 'GET',
    success: function (messages) {
      // Check if there are any messages
      if (messages.length > 0) {
        // Loop through each flash message and display it as an alert
        for (var i = 0; i < messages.length; i++) {
          var message = messages[i];
          var category = message[0]; // The message category
          var content = message[1];  // The message content

          // Handle different message categories
          switch (category) {
            case 'info':
              alert('Info: ' + content);
              break;
            case 'danger':
              alert('Danger: ' + content);
              break;
            case 'error':
              alert('Error: ' + content);
              break;
            // Add more cases as needed
            default:
              alert('Unknown category: ' + content);
              break;
          }
        }

        // Redirect to the user_login_page route
        window.location.href = "{{ url_for('user_login_page') }}";
      }
    },
    error: function (error) {
      console.error('Error fetching flash messages:', error);
    },
    complete: function () {
      // Hide the loading spinner after the AJAX request is complete
      hideLoadingSpinner();
    }
  });
}

// Call the function when the document is ready
$(document).ready(function () {
  displayFlashMessages();
});
