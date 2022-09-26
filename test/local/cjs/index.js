"use strict";

const logger = require("../../../dist/index.js");
const config = require("./config-logger.js");

logger.init( config.config_obj );
global.logger = logger;

const log_info_obj = { 
        "message":"log level info message", 
        "function":"function name here",
        "event id":"1111",
        "any other key here":"key value here ok",
      };

const log_warn_obj = { 
        "message":"log level warn warn warn", 
        "function":"function name here",
        "event id":"2222",
        "any other key here":"key value here ok",
      };

const log_error_obj = { 
        "message":"log level error message", 
        "function":"function name here",
        "event id":"33333",
        "any other key here":"key value here ok",
      };
      
let msg;

// msg = "loggin to console";
// global.logger.console.info("test console only log");
// global.logger.console.warn("test console only log");
// global.logger.console.error("test console only log");

// msg = "loggin to file";
// global.logger.file.info( msg );
// global.logger.file.warn( msg );
// global.logger.file.error( msg );

// msg = "loggin to cloudwatch";
// msg = log_info_obj;
// global.logger.cloudwatch.info( msg );
// global.logger.cloudwatch.warn( msg );
// global.logger.cloudwatch.error( msg );

msg = log_info_obj; global.logger.all.info( msg );
msg = log_warn_obj; global.logger.all.warn( msg );
msg = log_error_obj; global.logger.all.error( msg );


