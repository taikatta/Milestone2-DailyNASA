// Init date input
// Disable future dates, the solution is from: https://stackoverflow.com/
dateinput.max = new Date().toISOString().split("T")[0]; 
document.getElementById('dateinput').valueAsDate = new Date();

document.getElementById('button').addEventListener('click', event => {
    const date = document.getElementById('dateinput').value;

    // Build url
    const nasaUrl = new URL('https://api.nasa.gov/planetary/apod');
    nasaUrl.searchParams.set('api_key', 'DEMO_KEY');
    nasaUrl.searchParams.set('date', date);

    // Call api
    fetch(nasaUrl.toString())
        .then(response => response.json())
        .then(response => {
            idejon = document.getElementById('idejon')
            current_media = document.getElementById('media_from_nasa')
            if (response.media_type === "image") {
                element = document.createElement("img")
                element.setAttribute('src', response.url);
                element.setAttribute('width', 420)
                element.setAttribute('height', 315)
                element.setAttribute('id', 'media_from_nasa')
                if (current_media) {
                    idejon.replaceChild(element, current_media)
                } else {
                    idejon.appendChild(element)
                }
                document.getElementById('title').innerHTML = response.title;
                document.getElementById('explanation').innerHTML = response.explanation;
            } else {
                element = document.createElement("iframe")
                element.setAttribute('src', response.url)
                element.setAttribute('width', 420)
                element.setAttribute('height', 315)
                element.setAttribute('id', 'media_from_nasa')
                if (current_media) {
                    idejon.replaceChild(element, current_media)
                } else {
                    idejon.appendChild(element)
                }
                document.getElementById('title').innerHTML = response.title;
                document.getElementById('explanation').innerHTML = response.explanation;
            }
        });
});