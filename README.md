
<h1>
  <a href="https://ciphereditor.com">
    <img src="https://cdn.ciphereditor.com/assets/images/logo-ciphereditor-full-horizontal-light-pill.svg" alt="ciphereditor" height="46" />
  </a>
</h1>

[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square&labelColor=688097)](LICENSE.txt)
[![Standard Code Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square&labelColor=688097)](https://standardjs.com)

Your playground for cryptography, coding & data.

## Packages

As a monorepo this repository contains multiple packages to share common dependencies or to depend on each other. All packages listed below share the same version.

- `app-web` - Core web app built on React and Redux Toolkit
- `app-desktop` - Desktop application source built on the web app and Electron
- `types` - TypeScript types shared between packages and third-party extensions
- `processor` - JavaScript sandbox for Browser environments where extensions are executed in
- `extension-essentials` - Extension providing essential operations
- `extension-hash` - Extension providing operations related to cryptographic hash functions

## Scripts

Following scripts are offered by the root package:

- `npm run lint` - Lint all projects
- `npm run app-web-build` - Create an optimized production build for the web app
- `npm run app-web-start` - Start the development server for the web app
- `npm run app-web-preview` - Locally preview the production build for the web app
- `npm run app-desktop-start` - Start the development Electron app locally
- `npm run processor-build` - Create an optimized production build for the processor
- `npm run processor-watch` - Watch the processor source files and build on change
- `npm run extension-essentials-build` - Create a production build for the essentials extension
- `npm run extension-essentials-watch` - Watch the essentials extension source files and build on change
- `npm run extension-hash-build` - Create a production build for the cryptographic hash function extension

## Contributing

If you consider contributing to this project, [please read this first](CONTRIBUTING.md).

## Acknowledgements

### Use of Open Source fonts

We use fonts licensed under the [SIL Open Font License, 1.1](http://scripts.sil.org/OFL):

- LexendDeca[wght].ttf: Copyright 2019 The Lexend Project Authors ([https://github.com/googlefonts/lexend](https://github.com/googlefonts/lexend))
- IBMPlexMono-Regular.ttf: Copyright 2017 IBM Corp. All rights reserved.

### Use of Iconic Pro icons

We use [Iconic Pro](https://iconic.app) icons in this project.

Copyright (c) Iconic

Iconic Pro icons are copyrighted. Redistribution is not permitted. Use in source and binary forms, with or without modification, is allowed if you own an Iconic Pro license.

---

This is a project by [wierk.lu](https://wierk.lu/) and [contributors](https://github.com/wierkstudio/ciphereditor/graphs/contributors).
