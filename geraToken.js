const jwt = require("jsonwebtoken");

let payload = {
    iss: "omundoedos.net",
    iat: new Date().getSeconds(),
    exp: new Date().setMinutes(60),
    name: "Thiago Adriano",
    email: "tadriano.net@gmail.com"
};

var token = jwt.sign(payload, "batman batman batman");

console.log(token)