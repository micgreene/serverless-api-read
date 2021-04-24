'use strict';

//3rd party dependencies
const dynamoose = require('dynamoose');

//internal modules
const peopleModel = require('./schema.js');


// All Serverless functions (AWS and Azure) are "async" ...
exports.handler = async (event) => {
  try {    
    //get id from request paramters
    const id = event.queryStringParameters && event.queryStringParameters.id;

    //create data object to assign
    let data;

    //if an id was sent with the request, return with the object matching this id
    if(id) {
      const list = await peopleModel.query('id').eq(id).exec();
      data = list[0];
      //if not, return all items in database
    } else {
      data = await peopleModel.scan().exec();
    }
    return {
      //return status code and database objects
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message,
    };
  }
}
