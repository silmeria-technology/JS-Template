var srcPath = __dirname + "/../../../lib/";

describe("main", function () {
    var main = require(srcPath + "main");

    beforeEach(function () {
    });

    afterEach(function () {
    });

    it("exists", function () {
        expect(main).toBeDefined();
    });
});
