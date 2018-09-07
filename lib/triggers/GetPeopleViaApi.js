"use strict";
const request = require('request-promise');
const API_BASE_URI = 'https://raw.githubusercontent.com/ankitagnihotri1993/AnkitRestApi/master/db.json';
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
     const self=this;
  console.log('People data '+ JSON.stringify(response));
 self.emit('data',messages.newMessageWithBody(response));
 self.emit('end');
  });

}
