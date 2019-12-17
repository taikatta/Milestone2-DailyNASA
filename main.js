function getDate() {
    let inputData = new Date();
    document.querySelector('#startDate').valueAsDate
        = inputData;

    document.querySelector('#endDate').valueAsDate
        = inputData;
}


function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }

  
var request = new XMLHttpRequest();
START_DATE = '2019-03-04';
END_DATE = '2019-03-05';

str = 'https://';
request.open('GET', str.concat('api.nasa.gov/neo/rest/v1/feed?start_date=', START_DATE, '&end_date=', END_DATE, '&api_key=77d3ZAFkI96vA4EA6dPuFyNBI0sEDuI87tbTjTY9'));

request.onload = function () {
    var data = JSON.parse(this.response);

    console.log(data);
}

request.send();