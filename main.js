//$(window).bind("load", function() {
//    let inputData = new Date();
//    document.querySelector('#startDate').valueAsDate
//        = inputData;
//
 //   document.querySelector('#endDate').valueAsDate
  //      = inputData;
//});

//function updateStartDate(event) {

//}

// Init date input
document.getElementById('date-input').valueAsDate = new Date();

document.getElementById('button').addEventListener('click', event => {
  const date = document.getElementById('date-input').value;
  
  // Build url
  const nasaUrl = new URL('https://api.nasa.gov/planetary/apod');
  nasaUrl.searchParams.set('api_key', 'DEMO_KEY');
  nasaUrl.searchParams.set('date', date);

  // Call api
  fetch(nasaUrl.toString())
    .then(response => response.json())
    .then(response => {
        if(response.media_type === "image") {
      document.getElementById('pic-of-the-day').setAttribute('src', response.url);
      document.getElementById('title').innerHTML = response.title;
      document.getElementById('explanation').innerHTML = response.explanation;
        } else {
            document.getElementById('video-of-the-day').setAttribute('src', response.url);
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
