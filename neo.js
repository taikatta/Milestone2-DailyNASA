// Init date input
// Disable future dates, the solution is from: https://stackoverflow.com/
neoinput.max = new Date().toISOString().split("T")[0]; 
document.getElementById('neoinput').valueAsDate = new Date();

document.getElementById('button1').addEventListener('click', event => {
    const date = document.getElementById('neoinput').value;

    // Build url
    let START_DATE = date;
    let END_DATE = date;
    const neoUrl = new URL('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + 
        START_DATE + '&end_date=' + 
        END_DATE + '&api_key=77d3ZAFkI96vA4EA6dPuFyNBI0sEDuI87tbTjTY9');
 
    // Call api
    fetch(neoUrl.toString())
        .then(response => response.json())
        .then(response => {
            let data = response.near_earth_objects[START_DATE];
            let darab = response.element_count;
            var i = 0;
            var hazardous = false;
            var biggest = 0;
            do {
                // Check for potentially hazardous asteroid
                if(data[i].is_potentially_hazardous_asteroid === true) {
                    hazardous = true;
                    var hazardous_name = data[i].name;
                }
                // Find the biggest asteroid
                if(biggest < data[i].estimated_diameter.meters.estimated_diameter_max) {
                    var biggest = data[i].estimated_diameter.meters.estimated_diameter_max;
                }
                i++;
            }
            while (i < darab);
            if(hazardous) {
                var danger = "is";
                var danger_name = ", its name is: " + hazardous_name + ".";
            } else {
                var danger = "is no";
                var danger_name = ".";
            }
            document.getElementById('yourneo').textContent = "On "+ date + " the number of near Earth objects is: " + 
                response.element_count + ". Estimated maximum diameter is: " + biggest.toFixed(2) + " meter. There " + 
                danger + " potentially hazardous asteroid among them" + danger_name;
        });
});