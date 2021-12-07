var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://nexmo-nexmo-sms-verify-v1.p.rapidapi.com/send-verification-code',
  params: {phoneNumber: '244937517069', brand: 'Facilitando'},
  headers: {
    'x-rapidapi-host': 'nexmo-nexmo-sms-verify-v1.p.rapidapi.com',
    'x-rapidapi-key': '23d3d1eb61msh875a290b8abb85cp124a3fjsned938d3f8f7e'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});