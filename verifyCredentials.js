"use strict";
const request = require('request-promise');

module.exports = verify;

/**
 * Executes the verification logic by sending a simple to the Petstore API using the provided apiKey.
 * If the request succeeds, we can assume that the apiKey is valid. Otherwise it is not valid.
 *
 * @param credentials object to retrieve apiKey from
 *
 * @returns Promise sending HTTP request and resolving its response
 */
function verify(credentials) {

    // access the value of the apiKey field defined in credentials section of component.json
    const UserName = credentials.UserName;
    const Password = credentials.Password;
    const endPointUrl = credentials.endPointUrl;
    if (!UserName) {
        throw new Error('username is missing');
    }
    if (!Password) {
        throw new Error('Password is missing');
    }
    if (!endPointUrl) {
        throw new Error('endPointUrl is missing');
    }
    // sending a request to the most simple endpoint of the target API
    const requestOptions = {
        uri: 'https://services.odata.org/TripPinRESTierService/People',
        // headers: {
        //     'api-key': apiKey
        // },
        json: true
    };

    // if the request succeeds, we can assume the api key is valid
    return request.get(requestOptions);
}