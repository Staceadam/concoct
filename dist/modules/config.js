// get config file at base of repo
import path from 'path';
import fs from 'fs';
var SCHEMA_PATH = path.resolve('schema.potion');
var getSchema = function() {
    try {
        return fs.readFileSync(SCHEMA_PATH, 'utf8');
    } catch (error) {
        console.log(error);
    }
};
export var outputConfig = function() {
    var schema = getSchema();
    return schema;
};
