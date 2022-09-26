"use strict";

/*
  util/logger/transport/cloudwatch
*/

const Winston_Aws_Cloudwatch = require('winston-aws-cloudwatch');
const Winston_Cloudwatch = require('winston-cloudwatch');

////////////////////////////////////////////////////////////////////////////////
// prepare transports : winston-aws-cloudwatch
const get_aws = ( config_obj ) => {

  const transport_aws_cloudwatch = new Winston_Aws_Cloudwatch({
          logGroupName:  config_obj.general.log_group,
          logStreamName: config_obj.general.log_stream,
          createLogGroup:  true,
          createLogStream: true,
          submissionInterval:   2000,
          submissionRetryCount: 1,
          batchSize: 20,
          awsConfig: {
            region:          config_obj.aws.region,
            accessKeyId:     config_obj.aws.access_key,
            secretAccessKey: config_obj.aws.secret_key,
          },
          formatLog: item =>
            `${item.level}: ${item.message} ${JSON.stringify(item.meta)}`
        }); // new Winston_Aws_Cloudwatch

  return transport_aws_cloudwatch;

}; // get_aws

////////////////////////////////////////////////////////////////////////////////
// prepare transports : winston-cloudwatch for aws
const get_winston = ( config_obj ) => {

  const transport_cloudwatch = new Winston_Cloudwatch({
          logGroupName:  config_obj.general.log_group,
          logStreamName: config_obj.general.log_stream,
          awsRegion:     config_obj.aws.region,
          awsOptions: {
            credentials: {
              accessKeyId:     config_obj.aws.access_key,
              secretAccessKey: config_obj.aws.secret_key,
            },
          },
        }); // new Winston_Cloudwatch

  return transport_cloudwatch;

}; // get_winston

////////////////////////////////////////////////////////////////////////////////
const init = ( config_obj ) => {

  let transport;
  // aws or winston
  switch( config_obj.choice ){
    case "aws":
        transport = get_aws( config_obj );
      break;
    case "winston":
        transport = get_winston( config_obj );
      break;
    default:
        transport = get_aws( config_obj );
  }; // switch

  return transport;   

}; // init
////////////////////////////////////////////////////////////////////////////////
module.exports = {
  init,
}; // 

