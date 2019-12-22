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

            let adat = response.near_earth_objects[START_DATE];
            let darab = response.element_count;
            var i = 0;
            do {
                console.log(adat[i].name);
                console.log(adat[i].is_potentially_hazardous_asteroid);
                console.log(adat[i].estimated_diameter.meters.estimated_diameter_min);
  
                i++;
            }
            while (i < darab);
            
            
            document.getElementById('yourneo').innerHTML = response.element_count;
        });
});

//document.getElementsByClassName('yourneo').innerHTML = adat[i].name;
//element_count
//estimated_diameter.meters.estimated_diameter_min
//is_potentially_hazardous_asteroid
//near_earth_objects date 
