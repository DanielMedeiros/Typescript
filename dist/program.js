"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startUp_1 = require("./startUp");
let port = process.env.port || '3050';
startUp_1.default.app.listen(port, () => {
    console.log(`>> Executando o servidor na porta ${port} <<`);
});
