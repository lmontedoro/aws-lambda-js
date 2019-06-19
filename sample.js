var AWS = require('aws-sdk');

var lambda = new AWS.Lambda({region: 'us-east-1'});

//Create JSON object for parameters for invoking Lambda function
var pullParams = {
  FunctionName : 'sampleFunction',
  InvocationType : 'RequestResponse',
  LogType : 'None'
};

//Create variable to hold data returned by the Lambda function
var pullResults;

lambda.invoke(pullParams, function(error, data) {
  if (error) {
    console.log(error);
  } else {
    pullResults = JSON.parse(data.Payload);
    console.log(pullResults);
    console.log("Done");
  }
});