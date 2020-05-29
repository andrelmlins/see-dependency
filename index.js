'use strict';

const { spawnSync, spawn } = require('child_process');
const os = require('os');

const commandNpm = os.platform() === 'win32' ? 'npm.cmd' : 'npm';

/**
 * Get npm command
 * @param  {string} name Dependency name
 * @param  {string} string Npm Registry(optional)
 * @return {Array<string>} Npm command
 */
const getCommand = (name, registry) => {
  if (registry) {
    return ['show', name, '--json', '--registry', registry];
  } else {
    return ['show', name, '--json'];
  }
};

/**
 * Returns all details synchronously
 * @param  {string} name Dependency name
 * @param  {string} string Npm Registry(optional)
 * @return {Object} All details of an npm dependency
 */
const seeSync = (name, registry) => {
  try {
    const result = spawnSync(commandNpm, getCommand(name, registry), {
      cwd: process.cwd(),
      env: process.env,
      stdio: 'pipe',
      encoding: 'utf-8'
    });

    return JSON.parse(result.stdout);
  } catch (error) {
    return error;
  }
};

/**
 * Returns all details asynchronously
 * @param  {string} name Dependency name
 * @param  {string} registry Npm Registry(optional)
 * @return {Promise} Promise with all details of an npm dependency
 */
const see = (name, registry) =>
  new Promise((resolve, reject) => {
    const child = spawn(commandNpm, getCommand(name, registry));

    child.stdout.on('data', data => {
      resolve(JSON.parse(data));
    });

    child.stderr.on('data', err => {
      reject(err);
    });
  });

module.exports = { see, seeSync };

see('react-shadow-scroll').then(value => console.log(value));
