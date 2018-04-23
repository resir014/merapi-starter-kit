# merapi-starter-kit

> An example endpoint built using [Merapi](https://github.com/kata-ai/merapi), the JavaScript
> framework for microservices made by [Kata.ai](https://kata.ai/)

## Getting started

### Prerequisites

* [Node.js](https://nodejs.org/en/) (8.0+)
* [Yarn](https://yarnpkg.com/en/) - optional, you can use npm if you want

### Running locally

First, make a copy of the `.env.example` file and name it `.env`. This file will be used to host our
environment variables, e.g. service URL, port, etc.

Then, install the required dependencies using your preferred package manager.

```bash
yarn

# or, for npm:
npm install
```

And finally, run the following command to start the TypeScript watcher + Merapi server.

```bash
npm run watch
```

Your server now lives at the port that you set on your `.env` file (defaults to `9300`).

## Example endpoints

* `GET /` (and `GET /info`) - simple healthcheck
* `GET /api/v1/hello` - returns a JSON payload with hello message
* `GET /api/v1/hello/:toWho` - same as above, but with a customisable param
