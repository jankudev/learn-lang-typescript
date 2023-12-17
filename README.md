# Learning TypeScript through katas


## Initialization

Using `nvm` to manage per-project version of Node.js, the version is defined in `.nvmrc` and the project is initialized through `nvm install`. This can also be invoked by `npm install` as it's part of the `prepare` script in `package.json`.

To initialize a node.js/typescript project I've executed the following:
```bash
npm init
npm install --save-dev typescript
```

Then created the configuration file `tsconfig.json` for setting up TypeScript based on best-practice recommendations.
    
When learning a new language and applying TDD/ATDD I need a testing support.
For unit testing support I'm using ViTest as it has ES6 modules support (Jest works well only with CommonJS), it's Jest compatible.
For test-doubles support I'm using TypeScript Mockito.
```bash
npm install --save-dev vitest ts-node
npm install --save-dev ts-mockito
```

After installation the configuration of Jest is in `jest.config.js`.

For automatic controls I'm using the ESLint linter with TypeScript support:
```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

The linter can be configured with specific rules in `.eslintrc`.