"use strict";

/*
  util/logger
*/

const target = require("./target");

////////////////////////////////////////////////////////////////////////////////
// check config_obj for 2 keys, namely "file", "cloudwatch"
// if any one of these is missing, no transports will be initialized for that
// and if both keys are missing, only logging to console will be processed 
const init = ( config_obj ) => {

  target.cloudwatch.init( config_obj );
  target.console.init( config_obj );
  target.file.init( config_obj );

}; // init
////////////////////////////////////////////////////////////////////////////////

const cloudwatch = target.cloudwatch;
const console = target.console;
const file = target.file;

//////////////////////////////////////////////////////////////////////////////////
const info = ( msg ) => { 

  cloudwatch.info( msg );
  console.info( msg );
  file.info( msg );

}; // info
//////////////////////////////////////////////////////////////////////////////////
const warn = ( msg ) => { 

  cloudwatch.warn( msg );
  console.warn( msg );
  file.warn( msg );

}; // warn
//////////////////////////////////////////////////////////////////////////////////
const error = ( msg ) => { 

  cloudwatch.error( msg );
  console.error( msg );
  file.error( msg );

}; // info
////////////////////////////////////////////////////////////////////////////////
// log to all, to keep the object call level consistent with "console"
const all = {
  info: info,
  warn: warn,
  error: error,
};
////////////////////////////////////////////////////////////////////////////////
module.exports = {
  init,
  info,
  warn,
  error,
  all,
  cloudwatch,
  console,
  file,
}; //
