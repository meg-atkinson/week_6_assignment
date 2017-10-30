$(document).ready(function(){

// ###Technical Requirements 

// - Get the first element from an attribute name using ```$.attr()```
	
	console.log('ready');

		// target button on submit
		$("#submit-btn").on("click keypress", function(e) {
			// prevent default	
			e.preventDefault();
			if (e.which === 13 || e.type === 'click') {
			// get city input
				var city = $("#city-type").val();
				city = city.toLowerCase();
				
					// if input = "New York" or "New York City" or "NYC"
					if (city == "new york" || city == "new york city" || city == "nyc") {
						console.log(city);
						// make background image nyc.jpg
						$("body").css("background-image", "url(./images/nyc.jpg)");
					}

					// if input = "San Francisco" or "SF" or "Bay Area"
					else if (city  == "san francisco" || city == "sf" || city == "bay area") {
						// make background image sf.jpg
						$("body").css("background-image", "url(./images/sf.jpg)");
					}

					// if input = "Los Angeles" or "LA" or "LAX"
					else if (city == "los angeles" || city == "la" || city == "lax") {
					 	// make background image la.jpg
						$("body").css("background-image", "url(./images/la.jpg)");
					}

					// if input = "Austin" or "ATX"
					else if (city == "austin" || city == "atx") {
						// make background image austen.jpg
						$("body").css("background-image", "url(./images/austin.jpg)");
					}

					// if input = "Sydney" or "SYD"
					else if (city == "sydney" || city == "syd") {
						// make background image sydney.jpg
						$("body").css("background-image", "url(./images/sydney.jpg)");
					}

					else {
						$("body").css("background-image", "url(./images/citipix_skyline.jpg)");
					}
				// reset input box;

				$("#city-type").val("");
		}

	});	
});