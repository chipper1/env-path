# env-path
Loads environment variables from a chosen `.env` file into [`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env), using  [dotenv](https://www.npmjs.com/package/dotenv).

> Choose `.env` file

## Installation
[![NPM version](https://img.shields.io/badge/env--path-v1.0.0-green.svg)](https://www.npmjs.com/package/env-path)
```sh
$ npm install -g env-path
$ npm install env-path
```

## Usage

Create a `.env` file

```
API_KEY=key
PORT=3000
REACT_APP_FOO=bar
```

### Without path
Works similar to dotenv's Preload
```sh
Command-line:
$ env-path node app.js
```

### Path
Specify path of a `.env`-file, using the `-p` flag:

```sh
Command-line:
$ env-path -p path/.env-file app arg1 arg2 ...

package.json
"scripts": {
  "start"   : "env-path -p path/.env-file node app.js",
  "start2"  : "env-path -p path/.env.development node app.js",
  "start3"  : "env-path -p path/myFileName.env.myEnv node app.js",
  "build"   : "env-path -p path/.env.production react-scripts build"
}
```

## License

  [MIT](LICENSE)