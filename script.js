window.onload = function () {
    let form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("button pressed");

        let city = document.getElementById('cityName').value;
        let result = makeRequest(city);

        if (result.status === 200)
            resultHandle(result);
        else
            errorHandle(result);
    });
};

function makeRequest(city) {
    let request = new XMLHttpRequest();
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=1aec2ec35d3525ece44c6dbd16c33b0e';
    request.open('GET', url, false);
    request.send();

    return request;
}

function resultHandle(result) {
    let response = JSON.parse(result.responseText);
    let data = {
        city: response.name,
        temp: (response.main.temp).toFixed(1),
    };
    fillTemplate('infoTemplate','info', data);
}

function errorHandle(result) {
    let data = {
        code: result.status,
    };
    fillTemplate('errorTemplate','info', data);
}

function fillTemplate(elementTemplate, elementContent, data) {
    let template = doT.template(document.getElementById(elementTemplate).text, undefined);
    document.getElementById(elementContent).innerHTML = template(data);
}