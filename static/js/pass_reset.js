// flash_messages.js

function displayFlashMessages() {
    // Check for flashed messages and display them as alerts
    {% with messages = get_flashed_messages() %}
        {% if messages %}
            // Loop through each flash message and display it as an alert
            {% for message in messages %}
                alert('{{ message }}');
            {% endfor %}

            // Redirect to the user_login_page route after a delay (e.g., 2000 milliseconds)
            setTimeout(function() {
                window.location.href = "{{ url_for('user_login_page') }}";
            }, 2000);
        {% endif %}
    {% endwith %}
}

// Call the function when the document is ready
$(document).ready(function() {
    displayFlashMessages();
});
