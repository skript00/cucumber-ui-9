const report = require('multiple-cucumber-html-reporter')

report.generate({
  jsonDir: 'reports/cucumber-json',
  reportPath: 'reports/html-multi-report',
})
