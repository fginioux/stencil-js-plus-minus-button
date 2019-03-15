import { Config } from '@stencil/core';

import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export const config: Config = {
  namespace: 'NurunComponents',
  srcDir: 'src',
  devServer: {
    openBrowser: true
  },
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    builtins(),
    globals()
  ]
};
