const API_KEY = "AIzaSyD6tx2xb6xJ9KLMwxlpfqFc7cAjREe8qEI";
var map;
var nYorkCoor = {lat: 40.7291, lng: -73.9965};


function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
         zoom: 10,
         center: nYorkCoor
       });

       var infoWindow = new google.maps.InfoWindow({map: map});

       if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }


      }


      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
              infoWindow.setPosition(pos);
              infoWindow.setContent(browserHasGeolocation ?
                                    'Error: The Geolocation service failed.' :
                                    'Error: Your browser doesn\'t support geolocation.');
            }
