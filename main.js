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
});
