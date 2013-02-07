{
    baseUrl: "../lib",
    paths: {},
    optimize: "none",
    onBuildRead: function(moduleName, path, contents) {
        // Wrap everything except almond
        var wrappedContents = "define(function (require, exports, module) {\n" + contents + "});\n";
        return moduleName === "../../dependencies/almond" ? contents : wrappedContents;
    },
    name: "../../dependencies/almond",
    include: ["defaultName"], // Main file
    insertRequire: ["defaultName"], // Auto-load main file
    out: "../bin/output.min.js",
    wrap: true
}
