'use strict';

var AWS = require('aws-sdk');

var docClient = new AWS.DynamoDB.DocumentClient();

module.exports.handler = function(event, context, cb) {

  var params = {
    TableName: process.env.DB_TABLE_NAME,
    Key:{
      "id": event.id
    }
  };

  docClient.get(params, function(err, data) {
    return cb(err, data);
  });

};
