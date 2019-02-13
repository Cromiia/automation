exports.config = {

  specs: [
    // './test/login-page-design.js',
    // './test/client.js',
    // './test/f-password-func.js',
    // './test/login-functionality.js',
    // './test/registration-design.js',
    // './test/registration-functionality.js',
    // './test/new-bug-report.js',
    // './test/global-footer.js',
    // './test/navigation-bar.js',
    // './test/bug-form-page-validation.js',
    //'./rest-api/**/**/*.js'
      './rest-api/negative/01_post/missing-bug.js'
  ],

  exclude: [

  ],

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 1,

      browserName: 'chrome'
    }
  ],

  sync: true,

  logLevel: 'silent',

  coloredLogs: true,

  deprecationWarnings: false,

  bail: 0,

  screenshotPath: './errorShots/',

  baseUrl: 'https://reactbugtracker.com/',

  waitforTimeout: 10000,

  connectionRetryTimeout: 90000,

  connectionRetryCount: 3,

  services: ['selenium-standalone'],

  framework: 'mocha',

  reporters: ['dot', 'spec', 'allure'],
  reporterOptions: {
    allure: {
      outputDir: 'allure-results'
    }
  },

  mochaOpts: {
    ui: 'bdd'
  },

}
