# Azure Resource Namer

A simple web application that helps you come up with names for your Azure resources.

Naming suggestions are based on the examples from the [Cloud Adoption Framework naming convention](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming).

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

For more information, go to <https://aurelia.io/docs/cli/webpack>

## Run dev app

Run `yarn start`, then open `http://localhost:8080`

You can change the standard webpack configurations from CLI easily with something like this: `yarn start -- --open --port 8888`. However, it is better to change the respective npm scripts or `webpack.config.js` with these options, as per your need.

To enable Webpack Bundle Analyzer, do `yarn run analyze` (production build).

To enable hot module reload, do `yarn start -- --hmr`.

To change dev server port, do `yarn start -- --port 8888`.

To change dev server host, do `yarn start -- --host 127.0.0.1`

**PS:** You could mix all the flags as well, `yarn start -- --host 127.0.0.1 --port 7070 --open --hmr`

For long time aurelia-cli user, you can still use `au run` with those arguments like `au run --env prod --open --hmr`. But `au run` now simply executes `yarn start` command.

## Build for production

Run `yarn build`.

## Unit tests

Run `au test` (or `au jest`).

To run in watch mode, `au test --watch` or `au jest --watch`.
