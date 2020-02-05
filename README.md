# See Dependency

See all the details of an npm dependency

[![npm version](https://badge.fury.io/js/see-dependency.svg)](https://www.npmjs.com/package/see-dependency) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/see-dependency/blob/master/LICENSE) [![Build Status](https://travis-ci.com/andrelmlins/see-dependency.svg?branch=master)](https://travis-ci.com/andrelmlins/see-dependency)

## Install

```
npm install see-dependency
```

or

```
yarn add see-dependency
```

## Usage

```js
const seeDependency = require("see-dependency");

// returns all details asynchronously
seeDependency.see("moment").then(details => console.log(details));

// returns all details synchronously
console.log(seeDependecy.seeSync("lodash"));
```

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/see-dependency.png)](https://nodei.co/npm/see-dependency/)

## License

See Dependency is open source software [licensed as MIT](https://github.com/andrelmlins/see-dependency/blob/master/LICENSE).
