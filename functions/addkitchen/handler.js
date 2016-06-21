'use strict';

var AWS = require('aws-sdk'),
    uniqid = require('uniqid');

var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
var docClient = dynamodb.DocumentClient();

module.exports.handler = function(event, context, cb) {

    var params = {
        TableName:process.env.DB_TABLE_NAME,
        Item:{
            "id": uniqid(),
            "info":{
                "name": event.name,
                "style": event.style
            }
        }
    };

    docClient.put(params, function(err, data) {
        return cb(err, params.Item);
    });
};
