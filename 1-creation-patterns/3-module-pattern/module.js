/**
 * Module pattern
 */

const mod = {
  prop: 'SomePropertyHere',
  config: {
    lang: 'eng',
    cache: true
  },
  setConfig: config => {
    module.config = config;
  },
  isCacheEnabled: () => {
    console.log(module.config.cache ? 'Yes' : 'No');
  }
};

/**
 * - Warning! -
 * Properties and methods in mod object are public.
 * Check module-pattern-with-iife.js for encapsulation.
 */
