//create the map object
//This code defines a variable (named map) and assigns that variable to a new Map object.
function initMap(){
	var map = new google.maps.Map(document.getElementById("map"),
	{
		center: {
			lat: 48.8584,
			lng: 2.2945
		},
		zoom:15,
		//Map type:
		mapTypeId: google.maps.MapTypeId.SATELLITE,
			// 90' North is Top of Page
    		heading: 90,
    		// Tilt map 45 degrees vs 0
    		tilt: 45,
	});
}
console.log(map);

