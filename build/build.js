var childProcess = require("child_process"),
    clean = require("./helper/clean"),
    bundle = require("./helper/bundle"),
    async = require("async");

function _done(error) {
    if (error) {
        console.log("BUILD FAILED:\n" + error);
        process.exit(1);
    } else {
        console.log("BUILD SUCCESS");
        process.exit();
    }
}

function _handleErrors(func) {
    return function () {
        try {
            func.apply(func, Array.prototype.slice.call(process.argv, 3));
        } catch (e) {
            _done(e.message + "\n" + e.stack);
        }
    };
}

function executeBuild() {
    var options = {
            dest: process.env.dest,
            buildConfig: process.env.buildConfig || "all",
            debug: process.env.debug || true
        };

    async.series([
        clean.clean,
        bundle.bundle.bind(null, options),
    ], _done);
}

module.exports = {
    executeBuild: _handleErrors(executeBuild)
};
