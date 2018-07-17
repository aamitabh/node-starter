# node-starter

## Articles

- [How to set up a TypeScript project: A thorough guide for beginners making web apps with React](https://medium.freecodecamp.org/how-to-set-up-a-typescript-project-67b427114884)
- [Getting Started With TypeScript: Deep Dive](https://basarat.gitbooks.io/typescript/content/docs/getting-started.html)

## Server

### Node Initialization

```bash
npm init --y
npm install eslint
```
In package.json change "*main*" from "*index.js*" to "*server.ts*"

### Typescript setup

#### Package installation

```bash
npm install -g typescript@next
npm install -g ts-node

# Only do this if you are publishing the code to others, or
# you want to lock the version of typescript
npm install -D typescript@next
npm install -D ts-node@next
npm install -D tsconfig-paths
```
#### Configure VSCode ".vscode/settings.json"

```json
{
    "typescript.tsdk": "./node_modules/typescript/lib"
}
```

#### Config typescript "tsconfig.json"

```js
{
    "compilerOptions": {
      "target": "es6",            // Compatible with older browsers
      "module": "commonjs",        // Can also use "umd" for compatibility with both Node.js and browser
      "outDir": "./dist/",          // compiled .js files go here
      "baseUrl": ".",
      "paths": {
        "*": [
          "node_modules/*",
          "src/types/*"
      ]},
      "moduleResolution": "node", // Tell tsc to look in node_modules for modules
      "sourceMap": true,          // Creates *.js.map files
      "strict": true,             // Strict types, eg. prohibits `var x=0; x=null`
      "allowJs": true,
      "alwaysStrict": true,        // Enable JavaScript's "use strict" mode
      "noEmitOnError": true,
      "declaration": false,
      "noImplicitAny": false,        // Raise error on expressions and declarations with an implied 'any' type.
      "removeComments": true,
      "noLib": false,
      "lib": ["es6", "dom"],
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "typeRoots": ["node_modules/@types", "custom_typings"]
    },
    "include": [
        "**/*.ts",
        "**/*.spec.ts"
    ],
    "exclude": [
        "node_modules"
    ]
  }
```

#### nodemon.json configuration
```json
{
  "watch": ["src"],
  "ext": "ts",
  "ignore": ["src/**/*.spec.ts"],
  "exec": "ts-node -r tsconfig-paths/register ./src/server.ts"
}
```

If you do not want to use nodemon.json then you cal also add the script below to package.json

```json
"watch": "nodemon --exec ts-node -- ./src/index.ts"
```

#### Config start scripts

```json
"scripts": {
  "dev": "ts-node es6-modules/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

### Express install

```bash
npm install express @types/express
```