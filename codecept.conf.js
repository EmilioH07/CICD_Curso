const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://pirma.com.mx/',
      show: false,
    }
    
    
  },
  gherkin: {
    features: './features/**/*.feature',
    steps: ['./steps/steps.js']
  },

  plugins: {
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
      resultsDir: "allure-results",
    },
  },

  include: {
    
  },
  name: 'CICD_Curso'
}