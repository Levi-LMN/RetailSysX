// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


/** google_map js **/
function myMap() {
    // Specify the coordinates for the center of the map
    var myLatLng = { lat: -1.1630288, lng: 36.8564654 };

    // Create a new map instance
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng, // Set the center of the map
        zoom: 14 // Set the zoom level
    });

    // Add a marker to the map
    var marker = new google.maps.Marker({
        position: myLatLng, // Set the marker position
        map: map, // Specify the map instance to place the marker on
        title: 'New Marker' // Optional title for the marker
    });
}


 function confirmLogout() {
    // Display a confirmation dialog
    var confirmLogout = confirm("Are you sure you want to logout?");

    // If the user clicks OK, allow the logout
    return confirmLogout;
  }