defineM("witsec-weather-icons", function(g, mbrApp, tr) {
    mbrApp.registerPlugin("witsec-weather-icons", {
        name: "weather-icons",
        condition: !1,
        priority: 100,
        iconfont: {
            family: "WeatherIcons",
            title: "Weather Icons",
            prefix: "wi-",
            "class": "wi wi-fw",
            names: "alien barometer celsius cloud cloud-down cloud-refresh cloud-up cloudy cloudy-gusts cloudy-windy day-cloudy day-cloudy-gusts day-cloudy-high day-cloudy-windy day-fog day-hail day-haze day-light-wind day-lightning day-rain day-rain-mix day-rain-wind day-showers day-sleet day-sleet-storm day-snow day-snow-thunderstorm day-snow-wind day-sprinkle day-storm-showers day-sunny day-sunny-overcast day-thunderstorm day-windy degrees direction-down direction-down-left direction-down-right direction-left direction-right direction-up direction-up-left direction-up-right dust earthquake fahrenheit fire flood fog forecast-io-clear-day forecast-io-clear-night forecast-io-cloudy forecast-io-fog forecast-io-hail forecast-io-partly-cloudy-day forecast-io-partly-cloudy-night forecast-io-rain forecast-io-sleet forecast-io-snow forecast-io-thunderstorm forecast-io-tornado forecast-io-wind gale-warning hail horizon horizon-alt hot humidity hurricane hurricane-warning lightning lunar-eclipse meteor moon-0 moon-1 moon-2 moon-3 moon-4 moon-5 moon-6 moon-7 moon-8 moon-9 moon-10 moon-11 moon-12 moon-13 moon-14 moon-15 moon-16 moon-17 moon-18 moon-19 moon-20 moon-21 moon-22 moon-23 moon-24 moon-25 moon-26 moon-27 moon-alt-first-quarter moon-alt-full moon-alt-new moon-alt-third-quarter moon-alt-waning-crescent-1 moon-alt-waning-crescent-2 moon-alt-waning-crescent-3 moon-alt-waning-crescent-4 moon-alt-waning-crescent-5 moon-alt-waning-crescent-6 moon-alt-waning-gibbous-1 moon-alt-waning-gibbous-2 moon-alt-waning-gibbous-3 moon-alt-waning-gibbous-4 moon-alt-waning-gibbous-5 moon-alt-waning-gibbous-6 moon-alt-waxing-crescent-1 moon-alt-waxing-crescent-2 moon-alt-waxing-crescent-3 moon-alt-waxing-crescent-4 moon-alt-waxing-crescent-5 moon-alt-waxing-crescent-6 moon-alt-waxing-gibbous-1 moon-alt-waxing-gibbous-2 moon-alt-waxing-gibbous-3 moon-alt-waxing-gibbous-4 moon-alt-waxing-gibbous-5 moon-alt-waxing-gibbous-6 moon-first-quarter moon-full moon-new moon-third-quarter moon-waning-crescent-1 moon-waning-crescent-2 moon-waning-crescent-3 moon-waning-crescent-4 moon-waning-crescent-5 moon-waning-crescent-6 moon-waning-gibbous-1 moon-waning-gibbous-2 moon-waning-gibbous-3 moon-waning-gibbous-4 moon-waning-gibbous-5 moon-waning-gibbous-6 moon-waxing-crescent-1 moon-waxing-crescent-2 moon-waxing-crescent-3 moon-waxing-crescent-4 moon-waxing-crescent-5 moon-waxing-crescent-6 moon-waxing-gibbous-1 moon-waxing-gibbous-2 moon-waxing-gibbous-3 moon-waxing-gibbous-4 moon-waxing-gibbous-5 moon-waxing-gibbous-6 moonrise moonset na night-alt-cloudy night-alt-cloudy-gusts night-alt-cloudy-high night-alt-cloudy-windy night-alt-hail night-alt-lightning night-alt-partly-cloudy night-alt-rain night-alt-rain-mix night-alt-rain-wind night-alt-showers night-alt-sleet night-alt-sleet-storm night-alt-snow night-alt-snow-thunderstorm night-alt-snow-wind night-alt-sprinkle night-alt-storm-showers night-alt-thunderstorm night-clear night-cloudy night-cloudy-gusts night-cloudy-high night-cloudy-windy night-fog night-hail night-lightning night-partly-cloudy night-rain night-rain-mix night-rain-wind night-showers night-sleet night-sleet-storm night-snow night-snow-thunderstorm night-snow-wind night-sprinkle night-storm-showers night-thunderstorm rain rain-mix rain-wind raindrop raindrops refresh refresh-alt sandstorm showers sleet small-craft-advisory smog smoke snow snow snow-wind snowflake-cold solar-eclipse sprinkle stars storm-showers storm-showers storm-warning strong-wind sunrise sunset thermometer thermometer-exterior thermometer-internal thunderstorm thunderstorm time-1 time-2 time-3 time-4 time-5 time-6 time-7 time-8 time-9 time-10 time-11 time-12 tornado train tsunami umbrella volcano wind-beaufort-0 wind-beaufort-1 wind-beaufort-2 wind-beaufort-3 wind-beaufort-4 wind-beaufort-5 wind-beaufort-6 wind-beaufort-7 wind-beaufort-8 wind-beaufort-9 wind-beaufort-10 wind-beaufort-11 wind-beaufort-12 wind-direction windy".split(" ")
        },
        files: "css/weather-icons.min.css fonts/weathericons-regular-webfont.eot fonts/weathericons-regular-webfont.svg fonts/weathericons-regular-webfont.ttf fonts/weathericons-regular-webfont.woff fonts/weathericons-regular-webfont.woff2".split(" ")
    });
}, ["jQuery", "mbrApp", "TR()"]);