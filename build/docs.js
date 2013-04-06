var fs = require("fs"),
    async = require("async"),
    constants = require("./helper/constants"),
    childProcess = require("child_process"),
    path = require("path");

function _done(error) {
    if (error) {
        console.log("DOCS FAILED:\n" + error);
        process.exit(1);
    } else {
        console.log("DOCS SUCCESS");
        process.exit();
    }
}

function getJSDocCommand() {
    var jsDocsCommand = "java " +
        "-jar " + constants.DEPENDENCIES_JSDOC + "jsrun.jar " +
        constants.DEPENDENCIES_JSDOC + "app/run.js " +
        "-a " +
        "-r=3 " + constants.MAIN_LIB +
        " -t=" + constants.DEPENDENCIES_JSDOC + "templates/jsdoc/ " +
        "-d=" + constants.DOCS;

    return jsDocsCommand;
}

function executeDocsBuild(done) {
    console.log("Building docs in " + constants.DOCS);
    childProcess.exec(getJSDocCommand(), function (error, stdout, stderr) {
        if (error) {
            console.log(stdout);
            console.log(stderr);
        }
        done();
    });
}

function createDocs() {
    executeDocsBuild(_done);
}

module.exports = {
    "createDocs": createDocs
};
