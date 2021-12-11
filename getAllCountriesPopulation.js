//population

var XMLHttpRequest = require("xhr2");
var request = new XMLHttpRequest();

request.open(
  "GET",
  "http://api.countrylayer.com/v2/all?access_key=b57bb340254fa9e5a31c3a523aa33cb4"
);

request.send();
var countries = [];

request.onload = async function () {
  //countries = JSON.parse(this.response);
  
  countries = JSON.parse(this.response).filter(item => item.population <= 200000)
  console.log(countries);
};

