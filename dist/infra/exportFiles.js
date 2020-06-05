"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json2csv = require("json2csv");
const uuid = require("uuid");
const fs = require("fs");
const fields = ['_id', 'hat', 'title', 'text', 'author', 'img', 'publishDate', 'link', 'active'];
const opts = { fields };
class ExportFiles {
    constructor() {
        this.tocsv = function (characters) {
            try {
                const csv = json2csv.parse(characters, opts);
                const filename = uuid.v4() + ".csv";
                fs.writeFile('./exports/' + filename, csv, function (err) {
                    if (err)
                        throw err;
                    console.log('file saved');
                });
                return filename;
            }
            catch (err) {
                console.error(err);
            }
        };
    }
}
exports.default = new ExportFiles();
