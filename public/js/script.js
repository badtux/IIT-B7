$(document).ready(function() {

    $('#clickme').on('click', function(e){
        // Make an AJAX request to fetch locations
        $.get('/locations', function(data) {
            // Iterate over the received data and append to the list
            data.locdata.forEach(function(location) {
            // elem = document.getElementById('loction-list');
            $('ul').append(`<li>${location.name}, ${location.country}</li>`);
            });

            $('h1, span').text(data.planet);
        });
    });

  
});