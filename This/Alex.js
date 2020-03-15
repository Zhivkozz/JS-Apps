fetch("https://climacell-microweather-v1.p.rapidapi.com/weather/nowcast?fields=precipitation&unit_system=si&lat=42.8237618&lon=-71.2216286", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "climacell-microweather-v1.p.rapidapi.com",
		"x-rapidapi-key": "29ce19a0b8mshec854ead7932f61p1678b1jsnd4216e565594"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});