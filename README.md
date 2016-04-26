# github-repos-search
List Github repositories for a given searched user

# Steps to start
1. Run `npm install` to install all dependencies. This will also install
the `bower` and `typings` dependencies as part of `postinstall` scripts
2. Run `npm start` to `build` and serve from the `dist` folder

# Steps to run unit tests
1. Run `npm test`. This will perform below tasks:
    - Install dependencies through `npm install`, 
    - Build files using `gulp build`
    - Start karma test runner using `karma start karma.conf.js`
