# Homework-6

For this homework assignment, it was necessary to code JavaScript to produce a weather dashboard using the openweater API.

First, I set up a simple html file with divs for the search, button, search history list and the card where the weather would be displayed.

Using moment.js, it was necessary to retrieve the current and five future dates for the future forecast.

Using the openweather API and the search input, weather information for that city and future forecast would be retrieved.

Then, with javascript and jQuery, elements are created dynamically to display the name of the city, temperature, humidity, weather icon, etc.

I was not able to get the weather icons to display for each individual day of the forecast.  Also, there was no UV Index for the API I used.  I found one that retrieves the UV Index by corrdinates, but didn't know how to use that by city name.

Lastly, I was able to save the last city searched to local storage, but not able to run the function to produce the weather card on refresh.