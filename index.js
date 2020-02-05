"use strict";

const { exec, execSync } = require("child_process");
const os = require("os");

const commandNpm = os.platform() === "win32" ? "npm.cmd" : "npm";

const getCommand = (name, registry) => {
  if (registry) {
    return `${commandNpm} show ${name} --json --registry ${registry}`;
  } else {
    return `${commandNpm} show ${name} --json`;
  }
};

const seeSync = (name, registry) => {
  try {
    const result = execSync(getCommand(name, registry), {
      cwd: process.cwd(),
      env: process.env,
      stdio: "pipe",
      encoding: "utf-8"
    });

    return JSON.parse(result);
  } catch (error) {
    return error;
  }
};

const see = (name, registry) =>
  new Promise((resolve, reject) =>
    exec(getCommand(name, registry), (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(JSON.parse(stdout));
    })
  );

module.exports = { see, seeSync };
