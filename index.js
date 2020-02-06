"use strict";

const { exec, execSync } = require("child_process");
const os = require("os");

const commandNpm = os.platform() === "win32" ? "npm.cmd" : "npm";

/**
 * Get npm command
 * @param  {String} name Dependency name
 * @param  {String} string Npm Registry(optional)
 * @return {String} Npm command
 */
const getCommand = (name, registry) => {
  if (registry) {
    return `${commandNpm} show ${name} --json --registry ${registry}`;
  } else {
    return `${commandNpm} show ${name} --json`;
  }
};

/**
 * Returns all details synchronously
 * @param  {String} name Dependency name
 * @param  {String} string Npm Registry(optional)
 * @return {Object} All details of an npm dependency
 */
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

/**
 * Returns all details asynchronously
 * @param  {String} name Dependency name
 * @param  {String} string Npm Registry(optional)
 * @return {Promise} Promise with all details of an npm dependency
 */
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
