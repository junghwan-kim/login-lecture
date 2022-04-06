const fs = require("fs");
const appRoot = require("app-root-path");

//morgan 로그
const accessLogStream = fs.createWriteStream(
    `${appRoot}/log/access.log`, 
    {flags: "a"}
);

module.exports = accessLogStream;