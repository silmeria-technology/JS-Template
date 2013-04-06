var path = require("path"),
    jasmine = require("jasmine-node");

process.on('message', function (specOptions) {
    var onComplete = function () {
            process.send("Results pass");
        },
        options = JSON.parse(specOptions);

    options.onComplete = onComplete;

    if (options) {
        Error.stackTraceLimit = 2;
        jasmine.executeSpecsInFolder(options);
    }
});
