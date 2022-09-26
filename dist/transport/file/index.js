"use strict";

/*
  util/logger/transport/file
*/

const winston = require("winston");
      require('winston-daily-rotate-file');

const path = require("path");

////////////////////////////////////////////////////////////////////////////////
// - Write all logs with importance level of "info" or less
const info = ( config_obj ) => {

      const date_pattern = config_obj.filename.date_pattern;
      const max_size  = config_obj.max_size;
      const max_files = config_obj.max_files;

      const folder = config_obj.folder;
      const filename = config_obj.filename.info;
        const log_file = path.join( __dirname, folder, filename );

      //----------------------------------------
      const transport_file_info = new winston.transports.DailyRotateFile({
        level: 'info',
        dirname: folder,
        filename: filename,
        datePattern: date_pattern,
        zippedArchive: true,
        maxSize: max_size,
        maxFiles: max_files
      }); // transport_file_info
      //----------------------------------------

        return transport_file_info;

}; // info
////////////////////////////////////////////////////////////////////////////////
// - Write all logs with importance level of "info" or less
const warn = ( config_obj ) => {

      const date_pattern = config_obj.filename.date_pattern;
      const max_size  = config_obj.max_size;
      const max_files = config_obj.max_files;

      const folder = config_obj.folder;
      const filename = config_obj.filename.warn;
        const log_file = path.join( __dirname, folder, filename );

      //----------------------------------------
      const transport_file_warn = new winston.transports.DailyRotateFile({
        level: 'warn',
        dirname: folder,
        filename: filename,
        datePattern: date_pattern,
        zippedArchive: true,
        maxSize: max_size,
        maxFiles: max_files
      }); // transport_file_warn
      //----------------------------------------

        return transport_file_warn;

}; // warn
////////////////////////////////////////////////////////////////////////////////
// - Write all logs with importance level of `error` or less to `error.log`
const error = ( config_obj ) => {

      const date_pattern = config_obj.filename.date_pattern;
      const max_size  = config_obj.max_size;
      const max_files = config_obj.max_files;

      const folder = config_obj.folder;
      const filename = config_obj.filename.error;
        const log_file = path.join( __dirname, folder, filename );

      //----------------------------------------
      const transport_file_error = new winston.transports.DailyRotateFile({
        level: 'error',
        dirname: folder,
        filename: filename,
        datePattern: date_pattern,
        zippedArchive: true,
        maxSize: max_size,
        maxFiles: max_files
      }); // transport_file_error
      //----------------------------------------

        return transport_file_error;

}; // error
////////////////////////////////////////////////////////////////////////////////
// - Write all logs with importance level of `info` or less to `combined.log`
const combined = ( config_obj ) => {

      const folder = config_obj.folder;
      const filename = config_obj.filename.combined;
        const log_file = path.join( __dirname, folder, filename );

      return new winston.transports.File({ filename: log_file });

}; // combined
////////////////////////////////////////////////////////////////////////////////
module.exports = {
  info,
  warn,
  error,
  combined,
}; // 

