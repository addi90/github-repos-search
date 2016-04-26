module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'dist/*.js',
      'dist/user/**/*.js',
      'dist/common/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    reporters: ['dots', 'html'],

    browsers : ['Chrome'],

    port: 9876,

    colors: true,

    noResolve: false,

    logLevel: config.LOG_ERROR,

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};