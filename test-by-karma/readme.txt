1. Install (in root):
    npm install jasmine-core --save-dev
    npm install karma-cli -g
    npm install karma-jasmine --save-dev
    npm install phantomjs karma-phantomjs-launcher karma-chrome-launcher --save-dev
    bower install angular-mocks -S

2. Edit karma.conf.js to include your files. In here I copied the original to karma.conf.basic-example.js

3. Run:
    karma start karma.conf.cookbook.js

If your use the original karma.conf.js then run:
    karma start

