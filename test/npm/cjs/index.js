"use strict";

const logger = require("@yucolab/0000-util-logger-js");
const config = require("./config-logger.js");

console.log( "logger : ", logger );

const msg = "npm test cjs, log info here, done via published npm package, scoped in @yucolab";

logger.init( config.config_obj );
logger.all.info( msg );

