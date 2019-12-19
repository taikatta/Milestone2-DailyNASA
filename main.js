$(window).bind("load", function() {
    let inputData = new Date();
    document.querySelector('#startDate').valueAsDate
        = inputData;

    document.querySelector('#endDate').valueAsDate
        = inputData;
});

//function updateStartDate(event) {

//}





function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }


//var request = new XMLHttpRequest();
//START_DATE = '2019-03-04';
//END_DATE = '2019-03-04';
//
//str = 'https://';
//request.open('GET', str.concat('api.nasa.gov/neo/rest/v1/feed?start_date=', START_DATE, '&end_date=', END_DATE, '&api_key=77d3ZAFkI96vA4EA6dPuFyNBI0sEDuI87tbTjTY9'));
//
//request.onload = function () {
//    var data = JSON.parse(this.response);

//    console.log(data.near_earth_objects);
//}

//request.send();
START_DATE = '2019-03-04';
END_DATE = '2019-03-04';

const endpoint = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + START_DATE + '&end_date=' + END_DATE + '&api_key=77d3ZAFkI96vA4EA6dPuFyNBI0sEDuI87tbTjTY9';



fetch(endpoint)
  .then(resp => resp.json())
  .then(data => {
      let myData = data.near_earth_objects[START_DATE];
      console.log(myData);
})
  .catch(error => console.error(error))




    //{
//      console.log(data.near_earth_objects)
 // })

 // 3840692 console.table(myData[0].id);
 //myData[0].estimated_diameter.kilometers.estimated_diameter_min
 //is_potentially_hazardous_asteroid