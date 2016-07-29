'use strict';

var AWS = require('aws-sdk');
    //uniqid = require('uniqid');

var docClient = new AWS.DynamoDB.DocumentClient();

module.exports.handler = function(event, context, cb) {

    var id = '0' + (Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1);

    var params = {
        TableName: process.env.DB_TABLE_NAME,
        Item: {
            id: id,
            info: {
                name: event.body.name ,
                style: event.body.style
            }
        }
    };

    console.log("Putting : " + JSON.stringify(params));

    docClient.put(params, function(err, data) {
        return cb(err, {
            id: id,
            name: event.body.name,
            style: event.body.style
        });
    });
};