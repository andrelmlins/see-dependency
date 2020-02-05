"use strict";

const fs = require("fs");

const packageJson = JSON.parse(fs.readFileSync("./package.json"));

module.exports = packageJson;
