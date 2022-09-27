"use strict";

const log_group = "0000-logger-tester";

////////////////////////////////////////////////////////////////////////////////
const cloudwatch_config_obj = {
  aws: {
    region: process.env.CLOUDWATCH_REGION,
    access_key: process.env.CLOUDWATCH_ACCESS_KEY_ID,
    secret_key: process.env.CLOUDWATCH_SECRET_ACCESS_KEY,
  },
  general: {
    log_group:  log_group,
    log_stream: process.env.HOSTNAME,
  },
   choice: "aws",
   //choice: "winston",
};
//==========================================================
const file_config_obj = {
  timestamp_format: "YYYY-MM-DD hh:mm:ss.SSS A",
  folder: "log",
  filename: {
    date_patern: "YYYY-MM-DD",
    info:     "%DATE%-info.log.json",
    warn:     "%DATE%-warn.log.json",
    error:    "%DATE%-error.log.json",
    combined: "%DATE%-combined.log.json",
  },
  max_size: "20m",
  max_files: "366d",
};
//==========================================================
const config_obj = {
  cloudwatch: cloudwatch_config_obj,
  file: file_config_obj,
};
////////////////////////////////////////////////////////////////////////////////
module.exports = {
  config_obj,
};
