"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const db_1 = require("./infra/db");
const auth_1 = require("./infra/auth");
const upload_1 = require("./infra/upload");
const newsRouters_1 = require("./router/newsRouters");
class startUp {
    /**
     *
     */
    constructor() {
        this.app = express();
        this._db = new db_1.default;
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(compression());
        this.app.use('/exports', express.static(process.cwd() + '/exports'));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({
                versao: '0.0.1'
            });
        });
        this.app.route('/uploads').post(upload_1.default.single('file'), (req, res) => {
            try {
                res.send('Arquivo enviado com sucesso!!');
            }
            catch (error) {
                console.log(error);
            }
        });
        this.app.use(auth_1.default.validate);
        this.app.use('/', newsRouters_1.default);
    }
}
exports.default = new startUp();
