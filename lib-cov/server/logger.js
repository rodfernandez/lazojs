/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['server/logger.js']) {
  _$jscoverage['server/logger.js'] = [];
  _$jscoverage['server/logger.js'][1] = 0;
  _$jscoverage['server/logger.js'][5] = 0;
  _$jscoverage['server/logger.js'][7] = 0;
  _$jscoverage['server/logger.js'][8] = 0;
  _$jscoverage['server/logger.js'][9] = 0;
  _$jscoverage['server/logger.js'][11] = 0;
  _$jscoverage['server/logger.js'][12] = 0;
  _$jscoverage['server/logger.js'][13] = 0;
  _$jscoverage['server/logger.js'][14] = 0;
  _$jscoverage['server/logger.js'][15] = 0;
  _$jscoverage['server/logger.js'][20] = 0;
  _$jscoverage['server/logger.js'][26] = 0;
  _$jscoverage['server/logger.js'][29] = 0;
  _$jscoverage['server/logger.js'][38] = 0;
  _$jscoverage['server/logger.js'][46] = 0;
  _$jscoverage['server/logger.js'][48] = 0;
  _$jscoverage['server/logger.js'][49] = 0;
  _$jscoverage['server/logger.js'][59] = 0;
  _$jscoverage['server/logger.js'][60] = 0;
  _$jscoverage['server/logger.js'][61] = 0;
  _$jscoverage['server/logger.js'][69] = 0;
  _$jscoverage['server/logger.js'][73] = 0;
  _$jscoverage['server/logger.js'][86] = 0;
  _$jscoverage['server/logger.js'][87] = 0;
  _$jscoverage['server/logger.js'][88] = 0;
  _$jscoverage['server/logger.js'][90] = 0;
  _$jscoverage['server/logger.js'][92] = 0;
  _$jscoverage['server/logger.js'][93] = 0;
  _$jscoverage['server/logger.js'][94] = 0;
  _$jscoverage['server/logger.js'][95] = 0;
  _$jscoverage['server/logger.js'][97] = 0;
  _$jscoverage['server/logger.js'][98] = 0;
  _$jscoverage['server/logger.js'][99] = 0;
  _$jscoverage['server/logger.js'][100] = 0;
  _$jscoverage['server/logger.js'][103] = 0;
  _$jscoverage['server/logger.js'][108] = 0;
}
_$jscoverage['server/logger.js'].source = ["var winston = require('winston'),","    util = require(\"util\");","","// do it only once","if(!winston.transports.CustomerLogger){","// add custom logger to print out to error stream only","var CustomLogger = winston.transports.CustomerLogger = function (options) {","    this.name = 'CustomerLogger';","    this.level = options.level || 'info';","};","util.inherits(CustomLogger, winston.Transport);","CustomLogger.prototype.name = 'CustomerLogger'; // reset because util.inherits overwrites the original setting in constructor","CustomLogger.prototype.log = function (level, msg, meta, callback) {","    console.error(new Date().toISOString() + \" - \"  + level + \": \" + msg);","    callback(null, true);","};","}","","// Create out own instance of the logger to avoid someone directly accessing winston and changing things","var wLogger = new (winston.Logger)({","    transports: [","        new (winston.transports.CustomerLogger)({ level: 'error' })","    ]","});","","wLogger.exitOnError = false;","","","var lazoLogLevels = {","    levels: {","        debug: 0,","        info: 1,","        warn: 2,","        error: 3","    }","};","","wLogger.setLevels(lazoLogLevels.levels);","","/**"," The logger",""," @class logger"," @static"," **/","var logger = {","    setFileLogging : function(level, file) {","        level = level?level:\"error\";","        wLogger.add(winston.transports.File, {","            \"level\" : level,","            \"filename\" : file,","            \"json\" : false,","            \"timestamp\" : true,","            \"handleExceptions\" : true,","            \"exitOnError\": false","        });","    },","    setConsoleLogging : function(level) {","        this.logLevel = lazoLogLevels.levels[level];","        if (level) {","            wLogger.add(winston.transports.CustomerLogger, {","                \"level\" : level,","                \"json\" : false,","                \"timestamp\" : true,","                \"handleExceptions\" : true,","                \"exitOnError\": false","            });","        } else {","            wLogger.remove(winston.transports.CustomerLogger);","        }","    },","    setServer: function(server){","        this.server = server;","    },","","","    /**","     * Static logging method to log the message with the provided level and metadata","     * @method log","     * @param {String} level error, warn, info, debug","     * @param {String} method The method currently being logged","     * @param {String} msg The message","     * @param {Object} obj","     */","    log: function(level, method, msg, obj, req) {","        var logMsg = [];","        if(method) {","            logMsg.push(method);","        }","        logMsg.push(msg);","","        if(req &amp;&amp; typeof req.log === \"function\"){","            var lvl = lazoLogLevels.levels[level];","            if(lvl &gt;= this.logLevel){","                req.log(level, logMsg);","            }","        }else if(this.server &amp;&amp; typeof this.server.log === \"function\"){","            var lvl = lazoLogLevels.levels[level];","            if(lvl &gt;= this.logLevel){","                this.server.log(level, logMsg);","            }","        }else{","            wLogger.log(level, logMsg, obj);","        }","    }","};","","module.exports = logger;"];
_$jscoverage['server/logger.js'][1]++;
var winston = require("winston"), util = require("util");
_$jscoverage['server/logger.js'][5]++;
if ((! winston.transports.CustomerLogger)) {
  _$jscoverage['server/logger.js'][7]++;
  var CustomLogger = (winston.transports.CustomerLogger = (function (options) {
  _$jscoverage['server/logger.js'][8]++;
  this.name = "CustomerLogger";
  _$jscoverage['server/logger.js'][9]++;
  this.level = (options.level || "info");
}));
  _$jscoverage['server/logger.js'][11]++;
  util.inherits(CustomLogger, winston.Transport);
  _$jscoverage['server/logger.js'][12]++;
  CustomLogger.prototype.name = "CustomerLogger";
  _$jscoverage['server/logger.js'][13]++;
  CustomLogger.prototype.log = (function (level, msg, meta, callback) {
  _$jscoverage['server/logger.js'][14]++;
  console.error((new Date().toISOString() + " - " + level + ": " + msg));
  _$jscoverage['server/logger.js'][15]++;
  callback(null, true);
});
}
_$jscoverage['server/logger.js'][20]++;
var wLogger = new (winston.Logger)({transports: [new (winston.transports.CustomerLogger)({level: "error"})]});
_$jscoverage['server/logger.js'][26]++;
wLogger.exitOnError = false;
_$jscoverage['server/logger.js'][29]++;
var lazoLogLevels = {levels: {debug: 0, info: 1, warn: 2, error: 3}};
_$jscoverage['server/logger.js'][38]++;
wLogger.setLevels(lazoLogLevels.levels);
_$jscoverage['server/logger.js'][46]++;
var logger = {setFileLogging: (function (level, file) {
  _$jscoverage['server/logger.js'][48]++;
  level = (level? level: "error");
  _$jscoverage['server/logger.js'][49]++;
  wLogger.add(winston.transports.File, {"level": level, "filename": file, "json": false, "timestamp": true, "handleExceptions": true, "exitOnError": false});
}), setConsoleLogging: (function (level) {
  _$jscoverage['server/logger.js'][59]++;
  this.logLevel = lazoLogLevels.levels[level];
  _$jscoverage['server/logger.js'][60]++;
  if (level) {
    _$jscoverage['server/logger.js'][61]++;
    wLogger.add(winston.transports.CustomerLogger, {"level": level, "json": false, "timestamp": true, "handleExceptions": true, "exitOnError": false});
  }
  else {
    _$jscoverage['server/logger.js'][69]++;
    wLogger.remove(winston.transports.CustomerLogger);
  }
}), setServer: (function (server) {
  _$jscoverage['server/logger.js'][73]++;
  this.server = server;
}), log: (function (level, method, msg, obj, req) {
  _$jscoverage['server/logger.js'][86]++;
  var logMsg = [];
  _$jscoverage['server/logger.js'][87]++;
  if (method) {
    _$jscoverage['server/logger.js'][88]++;
    logMsg.push(method);
  }
  _$jscoverage['server/logger.js'][90]++;
  logMsg.push(msg);
  _$jscoverage['server/logger.js'][92]++;
  if ((req && ((typeof req.log) === "function"))) {
    _$jscoverage['server/logger.js'][93]++;
    var lvl = lazoLogLevels.levels[level];
    _$jscoverage['server/logger.js'][94]++;
    if ((lvl >= this.logLevel)) {
      _$jscoverage['server/logger.js'][95]++;
      req.log(level, logMsg);
    }
  }
  else {
    _$jscoverage['server/logger.js'][97]++;
    if ((this.server && ((typeof this.server.log) === "function"))) {
      _$jscoverage['server/logger.js'][98]++;
      var lvl = lazoLogLevels.levels[level];
      _$jscoverage['server/logger.js'][99]++;
      if ((lvl >= this.logLevel)) {
        _$jscoverage['server/logger.js'][100]++;
        this.server.log(level, logMsg);
      }
    }
    else {
      _$jscoverage['server/logger.js'][103]++;
      wLogger.log(level, logMsg, obj);
    }
  }
})};
_$jscoverage['server/logger.js'][108]++;
module.exports = logger;