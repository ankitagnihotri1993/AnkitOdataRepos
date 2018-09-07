"use strict";
const request = require('request-promise');
const API_BASE_URI = 'https://services.odata.org/TripPinRESTierService/(S(kxrlfpjz0tsjcnqu1vedklv2))/People';
exports.process = processTrigger;
function processTrigger()
{

   console.log('invoked');0
   const requestOptions = {
       uri: API_BASE_URI,
       json: true
   };

   // return the promise that sends a request to the Petstore API
request.get(requestOptions).then(function(response)
 {
  console.log('People data '+ JSON.stringify(response));

  });

}
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');