const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://hogwarts.appuix.com/',
    watchForFileChanges: false,
    experimentalOriginDependencies : true,
    pageLoadTimeout : 40000,
    experimentalSessionAndOrigin : true,
    // waitForAnimations: false,
    // animationDistanceThreshold: 20,

    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },

});
