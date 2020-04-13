var citiesArray = [];
var lastCity = localStorage.getItem("City");

$("#searchBtn").click(weatherLog);
$(document).on("click", ".cityBtn", weatherLog2);

function weatherLog() {
    $(".hide").removeClass("hide");
    
    var citySearch = $("#cityInput").val().trim();
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&APPID=826819847ef13c18ce5df3994cc73722";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var newCity = response.city.name;
        $("#city").text(newCity);
        var currentDate = "" + moment().format('MMMM Do YYYY');
        $("#city").append(" (" + currentDate + ")");
        var weatherIcon = "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png";
        $('#wicon').attr('src', weatherIcon);
        $("#temperature").text("Temperature: " + parseInt(((response.list[0].main.temp - 273.15) * 9 / 5 + 32)) + " °F");
        $("#humidity").text("Humidity: " + response.list[0].main.humidity + "%");
        $("#windSpeed").text("Wind Speed: " + response.list[0].wind.speed + " MPH");
        $("#5dayForecast").text("5-Day Forecast");
        var day1 = "" + moment().add(1, 'days').format('MMMM Do YYYY');
        var day2 = "" + moment().add(2, 'days').format('MMMM Do YYYY');
        var day3 = "" + moment().add(3, 'days').format('MMMM Do YYYY');
        var day4 = "" + moment().add(4, 'days').format('MMMM Do YYYY');
        var day5 = "" + moment().add(5, 'days').format('MMMM Do YYYY');

        $("#day1Date").text(day1);
        $("#day1Temp").text("Temp: " + parseInt(((response.list[3].main.temp - 273.15) * 9 / 5 + 32)) + " °F");
        $("#day1Humidity").text("Humidity: " + response.list[3].main.humidity + "%");
        $("#day2Date").text(day2);
        $("#day2Temp").text("Temp: " + parseInt(((response.list[11].main.temp - 273.15) * 9 / 5 + 32)) + " °F");
        $("#day2Humidity").text("Humidity: " + response.list[11].main.humidity + "%");
        $("#day3Date").text(day3);
        $("#day3Temp").text("Temp: " + parseInt(((response.list[19].main.temp - 273.15) * 9 / 5 + 32)) + " °F");
        $("#day3Humidity").text("Humidity: " + response.list[19].main.humidity + "%");
        $("#day4Date").text(day4);
        $("#day4Temp").text("Temp: " + parseInt(((response.list[27].main.temp - 273.15) * 9 / 5 + 32)) + " °F");
        $("#day4Humidity").text("Humidity: " + response.list[27].main.humidity + "%");
        $("#day5Date").text(day5);
        $("#day5Temp").text("Temp: " + parseInt(((response.list[35].main.temp - 273.15) * 9 / 5 + 32)) + " °F");
        $("#day5Humidity").text("Humidity: " + response.list[35].main.humidity + "%");

        citiesArray.unshift(newCity);

        $("#btnDiv").empty();

        for (var i = 0; i < citiesArray.length; i++) {
            var cityBtn = $("<button>");
            cityBtn.addClass("cityBtn");
            cityBtn.attr("data-name", citiesArray[i]);
            cityBtn.text(citiesArray[i]);
            $("#btnDiv").append(cityBtn);

        };

    });

    cityName = document.getElementById("city");
    localStorage.setItem("City", cityName); 

};

function weatherLog2() {
    $(".hide").removeClass("hide");
    var citySearch = $(this).attr("data-name");

    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&APPID=826819847ef13c18ce5df3994cc73722";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var newCity = response.city.name;
        $("#city").text(newCity);
        var currentDate = "" + moment().format('MMMM Do YYYY');
        $("#city").append(" (" + currentDate + ")");
        var weatherIcon = "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png";
        $('#wicon').attr("src", weatherIcon);
        $("#temperature").text("Temperature: " + parseInt(((response.list[0].main.temp - 273.15) * 9 / 5 + 32)) + " °F");
        $("#humidity").text("Humidity: " + response.list[0].main.humidity + "%");
        $("#windSpeed").text("Wind Speed: " + response.list[0].wind.speed + " MPH");
        $("#5dayForecast").text("5-Day Forecast");
        var day1 = "" + moment().add(1, 'days').format('MMMM Do YYYY');
        var day2 = "" + moment().add(2, 'days').format('MMMM Do YYYY');
        var day3 = "" + moment().add(3, 'days').format('MMMM Do YYYY');
        var day4 = "" + moment().add(4, 'days').format('MMMM Do YYYY');
        var day5 = "" + moment().add(5, 'days').format('MMMM Do YYYY');

        $("#day1Date").text(day1);
        $("#day1Temp").text("Temp: " + parseInt(((response.list[3].main.temp - 273.15) * 9 / 5 + 32)) + " °F");
        $("#day1Humidity").text("Humidity: " + response.list[3].main.humidity + "%");
        $("#day2Date").text(day2);
        $("#day2Temp").text("Temp: " + parseInt(((response.list[11].main.temp - 273.15) * 9 / 5 + 32)) + " °F");
        $("#day2Humidity").text("Humidity: " + response.list[11].main.humidity + "%");
        $("#day3Date").text(day3);
        $("#day3Temp").text("Temp: " + parseInt(((response.list[19].main.temp - 273.15) * 9 / 5 + 32)) + " °F");
        $("#day3Humidity").text("Humidity: " + response.list[19].main.humidity + "%");
        $("#day4Date").text(day4);
        $("#day4Temp").text("Temp: " + parseInt(((response.list[27].main.temp - 273.15) * 9 / 5 + 32)) + " °F");
        $("#day4Humidity").text("Humidity: " + response.list[27].main.humidity + "%");
        $("#day5Date").text(day5);
        $("#day5Temp").text("Temp: " + parseInt(((response.list[35].main.temp - 273.15) * 9 / 5 + 32)) + " °F");
        $("#day5Humidity").text("Humidity: " + response.list[35].main.humidity + "%");

        $("#btnDiv").empty();

        for (var i = 0; i < citiesArray.length; i++) {
            var cityBtn = $("<button>");
            cityBtn.addClass("cityBtn");
            cityBtn.attr("data-name", citiesArray[i]);
            cityBtn.text(citiesArray[i]);
            $("#btnDiv").append(cityBtn);

        };

    });

};


