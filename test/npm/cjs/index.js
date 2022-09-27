"use strict";

const logger = require("0000-util-logger-js");
const config = require("./config-logger.js");

console.log( "logger : ", logger );

const msg = "log info here, done via published npm package";

logger.init( config.config_obj );
logger.all.info( msg );

