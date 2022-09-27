"use strict";

import {util_logger} from '0000-util-logger-js';
//console.log( util_logger );

import {config_obj} from './config-logger.js';
//console.log( config_obj );

util_logger.init( config_obj );

const msg = "log msg via remote npm package in esm";

util_logger.all.info( msg );

