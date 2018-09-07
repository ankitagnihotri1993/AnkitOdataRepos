// "use strict";
// const request = require('request-promise');
// const API_BASE_URI = 'https://services.odata.org/TripPinRESTierService/(S(kxrlfpjz0tsjcnqu1vedklv2))/People';
// exports.process = processTrigger;

// function processTrigger()
// {
//     const self=this;
//    console.log('invoked');
//    const requestOptions = {
//        uri: API_BASE_URI,
//        json: true
//    };

//    // return the promise that sends a request to the Petstore API
// request.get(requestOptions).then(function(response)
//  {
     
//  console.log('People data '+ JSON.stringify(response));
//  self.emit('data',messages.newMessageWithBody(response));
//  self.emit('end');
//   });

// }
"use strict";
const request = require('request-promise');
const messages = require('elasticio-node').messages;
const Base_Dir_Uri ="https://services.odata.org/TripPinRESTierService/(S(kpphlcq133la2kwbhknxmmjr))/People";
exports.process = processTriger;
function processTriger()
{   const self = this;
   const requestOptions = {
       uri: Base_Dir_Uri,
       json: true
   };
   return request.get(requestOptions).then(function(response){
       console.log('People data '+ JSON.stringify(response));
       self.emit('data', messages.newMessageWithBody(response));
       self.emit('end');

});

}