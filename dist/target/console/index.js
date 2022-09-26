"use strict";

/*
  util/logger/target/console
*/

const winston = require('winston');
const { combine, timestamp, json, colorize, align, printf } = winston.format;

const transport = require("../../transport");

// print as a line in console log 
const divider = "-".repeat(30);

let logger_console;

///////////////////////////////////////////
const init = ( config_obj ) => {

  const log_item_timestamp_format = config_obj.file.timestamp_format;
  const t_cs = transport.console.init();

  logger_console = winston.createLogger({
    //level: process.env.LOG_LEVEL || 'info',
    format: combine(
      colorize({ all: true }),
      timestamp( { format: log_item_timestamp_format }),
      align(),
      printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}` )
    ),
    transports: [ t_cs ],
  }); // logger_console

} ; // init
///////////////////////////////////////////
const info = ( msg ) => {

  // check if the given msg is string or object
  if( typeof(msg) === "string" ){
    // string : just print it out
    logger_console.info( msg );

  }else{
    logger_console.info( divider );
    // object : print out each key separately on each line
    for( const key in msg ){
      const data = msg[key];
      const this_log = key + " : " + data;
      logger_console.info( this_log );
    }; // for
    logger_console.info( divider );
  }; // check if the given msg is string or object

}; // info
///////////////////////////////////////////
const warn = ( msg ) => {

  // check if the given msg is string or object
  if( typeof(msg) === "string" ){
    // string : just print it out
    logger_console.warn( msg );

  }else{
    logger_console.warn( divider );
    // object : print out each key separately on each line
    for( const key in msg ){
      const data = msg[key];
      const this_log = key + " : " + data;
      logger_console.warn( this_log );
    }; // for
    logger_console.warn( divider );
  }; // check if the given msg is string or object

}; // warn
///////////////////////////////////////////
const error = ( msg ) => {

  // check if the given msg is string or object
  if( typeof(msg) === "string" ){
    // string : just print it out
    logger_console.error( msg );

  }else{
    logger_console.error( divider );
    // object : print out each key separately on each line
    for( const key in msg ){
      const data = msg[key];
      const this_log = key + " : " + data;
      logger_console.error( this_log );
    }; // for
    logger_console.error( divider );
  }; // check if the given msg is string or object

}; // error
///////////////////////////////////////////
// all exports go here
module.exports = {
  init,
  info,
  warn,
  error,
};
