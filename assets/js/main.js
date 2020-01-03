const api_key = '77d3ZAFkI96vA4EA6dPuFyNBI0sEDuI87tbTjTY9';

// Init date input

document.getElementById('dateinput').valueAsDate = new Date();

document.getElementById('button').addEventListener('click', updatePage);

function updatePage() {
    const date = document.getElementById('dateinput').value;
    const valid = dateValidator(date);

    if (valid) {
        document.getElementById('validDate').innerHTML = valid;
        document.getElementById('title').innerHTML = '';
        document.getElementById('explanation').textContent = '';
        document.getElementById('yourneo').textContent = '';
        return;
    }
    document.getElementById('validDate').innerHTML = '';

    // Build url
    const nasaUrl = new URL('https://api.nasa.gov/planetary/apod');
    nasaUrl.searchParams.set('api_key', api_key);
    nasaUrl.searchParams.set('date', date);

    // Call api
    fetch(nasaUrl.toString())
        .then(handleErrors)
        .then(response => response.json())
        .then(response => {
            document.getElementById('expl_text').className = 'expl_text1';

            //Check if today's media is image or video
            const mediaElement = response.media_type === 'image' ? 'img' : 'iframe';

            updateMedia(
                mediaElement,
                response.url,
                '<h4>' + response.title + '</h4>',
                response.explanation
            )
        })
        .catch(error => {
            updateMedia(
                'img',
                'assets/images/black.jpg',
                '',
                ''
            )
        });

    // Build url
    const neoUrl = new URL('https://api.nasa.gov/neo/rest/v1/feed');
    neoUrl.searchParams.set('start_date', date);
    neoUrl.searchParams.set('end_date', date);
    neoUrl.searchParams.set('api_key', api_key);


    // Call api
    fetch(neoUrl.toString())
        .then(handleErrors)
        .then(response => response.json())
        .then(response => {
            let data = response.near_earth_objects[date];
            let count = response.element_count;
            var i = 0;
            var hazardous = false;
            var biggest = 0;
            do {
                // Check for potentially hazardous asteroid
                if (data[i].is_potentially_hazardous_asteroid === true) {
                    hazardous = true;
                    var hazardous_name = data[i].name;
                }
                // Find the biggest asteroid
                if (biggest < data[i].estimated_diameter.meters.estimated_diameter_max) {
                    biggest = data[i].estimated_diameter.meters.estimated_diameter_max;
                }
                i++;
            }
            while (i < count);
            var danger = hazardous ? 'is' : 'is no';
            var danger_name = hazardous ? ', its name is: ' + hazardous_name + '.' : '.';

            document.getElementById('yourneo').innerHTML = '<br><h4>Near Earth Objects on ' + date + ':</h4>' +
                'The number of near Earth objects is: ' + response.element_count + '.<br>' +
                'Estimated maximum diameter is: ' + biggest.toFixed(2) + ' meter.<br>' +
                'There ' + danger + ' potentially hazardous asteroid among them' + danger_name + '<br>';
        })
        .catch(error => {
            document.getElementById('yourneo').innerHTML = 'No near Earth object.';
        });
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

// Disable future dates, the solution is from: https://stackoverflow.com/

function dateValidator(date) {
    if (date < '1995-06-16' || date > new Date().toISOString().split('T')[0]) {
        return 'Please enter a date between 16/06/1995 and today!';
    }
    var usaTime = formatDate(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }).split('T')[0]);
    if (usaTime < date) {
        return 'NASA date is still ' + usaTime + ', please select another date.';
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function updateMedia(media_type, url, title, explanation) {
    const APOD = document.getElementById('photo');
    const media = document.getElementById('media_from_nasa');

    var element = document.createElement(media_type);
    element.setAttribute('src', url);
    element.setAttribute('id', 'media_from_nasa');
    if (media) {
        APOD.replaceChild(element, media);
    } else {
        APOD.appendChild(element);
    }
    document.getElementById('title').innerHTML = title 
    document.getElementById('explanation').textContent = explanation;
}