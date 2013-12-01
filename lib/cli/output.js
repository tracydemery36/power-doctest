var fs = require('fs');
var path = require("path");
var escodegen = require("escodegen");
var docPower = require("../../lib/doc-power");
module.exports = function (filePath, outputPath) {
    if (!outputPath) {
        console.log("output path is not found");
        process.exit(0);
    }
    var resolvePath = path.resolve(filePath);
    var outputResolvePath = path.resolve(outputPath);
    var fileData = fs.readFileSync(resolvePath, "utf-8");
    var result = docPower.convertFromCodeToTree(fileData);
    if (result == null) {
        return console.log("Doesn't convert file");
    }
    var resolvedTree = docPower.insertAssertModule(result);
    // FIXME: preserve comment
    var reCode = escodegen.generate(resolvedTree, {
        comment: true
    });
    fs.writeFile(outputResolvePath, reCode, function(error) {
        if(error){
            throw error;
        }
        process.exit(1);
    })
};