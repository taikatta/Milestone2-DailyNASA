// Init date input
document.getElementById('date-input').valueAsDate = new Date();

document.getElementById('button').addEventListener('click', event => {
    var date = document.getElementById('date-input').value;
    const today = new Date().toISOString().substring(0,10);

    if(today < date){
        var date = today;
    }

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



//function myFunction() {
  //  document.getElementById("demo").innerHTML = response.title;
  //}


//var request = new XMLHttpRequest();
//START_DATE = '2019-03-04';
//END_DATE = '2019-03-04';
//
//str = 'https://';
//request.open('GET', str.concat('api.nasa.gov/neo/rest/v1/feed?start_date=', START_DATE, '&end_date=', END_DATE, '&api_key='));
//
//request.onload = function () {
//    var data = JSON.parse(this.response);

//    console.log(data.near_earth_objects);
//}

//request.send();
//START_DATE = '2019-03-04';
//END_DATE = '2019-03-04';

//const endpoint = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + START_DATE + '&end_date=' + END_DATE + '&api_key=';



//fetch(endpoint)
//  .then(resp => resp.json())
//  .then(data => {
//      let myData = data.near_earth_objects[START_DATE];
//      console.log(myData);
//})
//  .catch(error => console.error(error))




    //{
//      console.log(data.near_earth_objects)
 // })

 // 3840692 console.table(myData[0].id);
 //myData[0].estimated_diameter.meters.estimated_diameter_min
 //is_potentially_hazardous_asteroid
