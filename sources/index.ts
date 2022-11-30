import { Plugin } from '@yarnpkg/core';
import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';

const plugin: Plugin = {
  hooks: {
    setupScriptEnvironment(project, scriptEnv) {
      const myEnv = dotenv.config()
      dotenvExpand.expand(myEnv)
      Object.assign(scriptEnv, myEnv.parsed)
    },
  },
};

export default plugin;
