/*
 *  Copyright 2013 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var util = require("util"),
    constants = require("./constants"),
    fs = require("fs"),
    async = require("async"),
    requirejs = require("../../dependencies/rjs/r");

function getAllBuildConfigs() {
    return fs.readdirSync(constants.BUILD_CONFIG_ROOT);
}

function runOptimizer(buildConfig, options, done) {
    var config = require("../config/" + buildConfig);
    if (options.debug === "false") {
        config.optimize = "uglify2";
    }

    requirejs.optimize(config, function (buildResponse) {
        done();
    }, function (err) {
        console.log(err);
    });
}

function runBundle(options, done) {
    var buildConfigs = [],
        optimizations = [];
    if (options.buildConfig === "all") {
        buildConfigs = getAllBuildConfigs();
        buildConfigs.forEach(function (configFile) {
            optimizations.push(runOptimizer.bind(null, configFile, options));
        });
    } else {
        optimizations.push(runOptimizer.bind(null, options.buildConfig + ".js", options));
    }
    async.series(optimizations, done);
}

module.exports = {
    bundle: runBundle
};
