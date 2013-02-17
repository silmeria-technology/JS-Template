{
    "baseUrl": "../../",
    "paths": {},
    "optimize": "none",
    "onBuildRead": function (moduleName, path, contents) {
        var wrappedContents = "define(function (require, exports, module) {\n" + contents + "});\n";
        return moduleName === "dependencies/almond/almond" ? contents : wrappedContents;
    },
    "name": "dependencies/almond/almond",
    "include": ["./lib/main"],
    "insertRequire": ["./lib/main"],
    "out": "../../dist/output.js",
    "wrap": true
}
