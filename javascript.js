// Init date input
// Disable future dates, the solution is from: https://stackoverflow.com/
dateinput.max = new Date().toISOString().split("T")[0];
document.getElementById('dateinput').valueAsDate = new Date();

document.getElementById('button').addEventListener('click', event => {
    const date = document.getElementById('dateinput').value;

    // Build url
    const nasaUrl = new URL('https://api.nasa.gov/planetary/apod');
    nasaUrl.searchParams.set('api_key', '77d3ZAFkI96vA4EA6dPuFyNBI0sEDuI87tbTjTY9');
    nasaUrl.searchParams.set('date', date);

    // Call api
    fetch(nasaUrl.toString())
        .then(response => response.json())
        .then(response => {
            const APOD = document.getElementById('APOD')
            const media = document.getElementById('media_from_nasa')

            //Check if today's media is image or video
            const mediaElement = response.media_type === 'image' ? 'img' : 'iframe';

            element = document.createElement(mediaElement);
            element.setAttribute('src', response.url);
            element.setAttribute('id', 'media_from_nasa')
            if (media) {
                APOD.replaceChild(element, media)
            } else {
                APOD.appendChild(element)
            }
            document.getElementById('title').textContent = response.title;
            document.getElementById('explanation').textContent = response.explanation;

        });

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
            var danger = hazardous ? "is" : "is no";
            var danger_name = hazardous ? ", its name is: " + hazardous_name + "." : ".";

            document.getElementById('yourneo').textContent = "Near Earth Objects. On "+ date + " the number of near Earth objects is: " + 
                response.element_count + ". Estimated maximum diameter is: " + biggest.toFixed(2) + " meter. There " + 
                danger + " potentially hazardous asteroid among them" + danger_name;
        });
});