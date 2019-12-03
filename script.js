window.onload = function () {
    let form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("button pressed");

        let city = document.getElementById('cityName').value;
        let result = makeRequest(city);
        let result_parsed = JSON.parse(result.responseText);
        
        console.log(result_parsed);
    });
};

function makeRequest(city) {
    let request = new XMLHttpRequest();
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=1aec2ec35d3525ece44c6dbd16c33b0e';
    request.open('GET', url, false);
    request.send();

    return request;
}
