"use strict";

/*
  util/logger/target/file
*/

const winston = require('winston');
const { combine, timestamp, json } = winston.format;

const transport = require("../../transport");

let logger_info, logger_warn, logger_error;

///////////////////////////////////////////
const init = ( config_obj ) => {

  const log_item_timestamp_format = config_obj.file.timestamp_format;

  const t_f_info = transport.file.info( config_obj.file );
  const t_f_warn = transport.file.warn( config_obj.file );
  const t_f_error = transport.file.error( config_obj.file );

  //-----------------------------------------------------------
  // define the loggers here with level, format and transport
  //-----------------------------------------------------------
  logger_info = winston.createLogger({
    level: 'info',
    format: combine(
      timestamp( { format: log_item_timestamp_format }),
      json()
    ),
    transports: [ t_f_info ],
  }); // logger_info
  //-----------------------------------------
  logger_warn = winston.createLogger({
    level: 'warn',
    format: combine(
      timestamp( { format: log_item_timestamp_format }),
      json()
    ),
    transports: [ t_f_warn ],
  }); // logger_warn
  //-----------------------------------------
  logger_error = winston.createLogger({
    level: 'error',
    format: combine(
      timestamp( { format: log_item_timestamp_format }),
      json()
    ),
    transports: [ t_f_error ],
  }); // logger_error
  //-----------------------------------------

}; // init
///////////////////////////////////////////
const info = ( msg ) => {

  logger_info.info( msg );

}; // info
///////////////////////////////////////////
const warn = ( msg ) => {

  logger_warn.warn( msg );

}; // warn
///////////////////////////////////////////
const error = ( msg ) => {

  logger_error.error( msg );

}; // error
///////////////////////////////////////////
// all exports go here
module.exports = {
  init,
  info,
  warn,
  error,
};
