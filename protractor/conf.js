var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    directConnect: false,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['tab.js'],
    //specs: ['todo-spec.js'],
    specs: ['todo-spec.js', 'tab.js'],
    capabilities: {
        browserName: 'chrome'
        //browserName: 'internet explorer',
        //platform: 'ANY',
        //version: '11'
        //requireWindowFocus: true
        //browserName: 'chrome'
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    resultJsonOutputFile: 'result.json',
    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );
    }
};