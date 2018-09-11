"use strict";
const co = require('co');
const request = require('request-promise');
const messages = require('elasticio-node').messages;

const API_BASE_URI = 'https://services.odata.org/TripPinRESTierService/People';

exports.process = processAction;

/**
 * Executes the action's logic by sending a request to the Petstore API and emitting response to the platform.
 * The function returns a Promise sending a request and resolving the response as platform message.
 *
 * @param msg incoming messages which is empty for triggers
 * @param cfg object to retrieve triggers configuration values, such as apiKey and pet status
 * @returns promise resolving a message to be emitted to the platform
 */
function processAction(msg, cfg) {

    // access the value of the apiKey field defined in credentials section of component.json
    const apiKey = cfg.apiKey;
    // body contains the mapped data
    const body = msg.body;

    // access the value of the mapped value into name field of the in-metadata
   
    // access the value of the mapped value into name field of the in-metadata
    const FirstName = body.FirstName;
    const LastName = body.LastName;
    

    // if (!UserName) {
    //     throw new Error('UserName is required');
    // }

    // if (!FirstName) {
    //     throw new Error('FirstName is required');
    // }

    const People = {
      
        FirstName,
        LastName,
        
    };

    console.log('About to Update People data');

    const requestOptions = {
        uri: `${API_BASE_URI}('russellwhyte')`,
        
        json: true
    };

    // return the promise that sends a request to the Petstore API
    return co(function* gen() {
        const response = yield request.post(requestOptions);

        return messages.newMessageWithBody(response);
    });
}