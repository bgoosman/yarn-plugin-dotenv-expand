# Install

Requires Yarn 3

```
yarn plugin import https://raw.githubusercontent.com/bgoosman/yarn-plugin-dotenv-expand/main/bundles/%40yarnpkg/plugin-dotenv-expand.js
```

# Use

The plugin will load .env before running your package.json script.

```
"scripts": {
  "echo": "echo $FROM_DOTENV",
  "printenv": "printenv"
}
```

# Build

```
yarn build
```

# Deploy

1. git commit the bundles directory
2. push to main
