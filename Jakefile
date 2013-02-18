desc("Build");
task('default', [], require('./build/build').executeBuild);

desc("Builds and outputs to /dist by default or to the provided path - jake build [outputPath]");
task('build', [], require('./build/build').executeBuild);

//desc("Builds the docs");
//task('docs', [], require('./build/docs'));

desc("Runs all tests - jake test [path,path2]");
task('test', [], function () {
    require('./build/test').runSpecs({}, process.argv.length >= 4 ? process.argv[3] : null);
});

desc("Runs jshint - jake lint [path1] [path2]");
task('lint', [], function () {
    require('./build/lint').lint(complete, Array.prototype.slice.call(arguments));
}, true);
