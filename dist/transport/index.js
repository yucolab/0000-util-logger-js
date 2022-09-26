"use strict";

/*
  util/logger/transport
*/

const file       = require("./file");
const console    = require("./console");
const cloudwatch = require("./cloudwatch");

////////////////////////////////////////////////////////////////////////////////
module.exports = {
  file,
  console,
  cloudwatch,
}; // 

