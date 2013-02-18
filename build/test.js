var path = require("path");

function runSpecs(options, done) {
    var jasmine = require('jasmine-node'),
        specs = path.normalize(__dirname + "/../" + (options.customPath || "test")),
        jasmineOptions = {
            specFolder: specs,
            isVerbose: false,
            showColors: true,
            onComplete: done 
        };

    // Reporter options
    Error.stackTraceLimit = 2;
    
    jasmine.executeSpecsInFolder(jasmineOptions);
}

module.exports = {
    runSpecs: runSpecs
};
