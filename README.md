# Azure Resource Namer

A simple web application that helps you come up with names for your Azure resources.

Naming suggestions are based on the examples from the [Cloud Adoption Framework naming convention](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming).

This project uses Aurelia and Vite.

For more information, go to <https://aurelia.io>

## Run dev app

Run `pnpm start`, then open `http://localhost:9000`

You can change the standard Vite configurations from CLI easily with something like this: `pnpm start -- --open --port 8888`. However, it is better to change the respective npm scripts or `vite.config.ts` with these options, as per your need.

To change dev server port, do `pnpm start -- --port 8888`.

To change dev server host, do `pnpm start -- --host 127.0.0.1`

**PS:** You could mix all the flags as well, `pnpm start -- --host 127.0.0.1 --port 7070 --open`

## Build for production

Run `pnpm build`.

## Unit tests

Run `pnpm test`.

To run in watch mode, `pnpm test -- --watch`.
