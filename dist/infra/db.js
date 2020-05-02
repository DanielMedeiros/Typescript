"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DB {
    constructor() {
        this.DB_URL = 'mongodb://link-db/db_portal';
    }
    createConnection() {
        mongoose.connect(this.DB_URL);
    }
}
exports.default = DB;
