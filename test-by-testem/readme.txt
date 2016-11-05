1. Install all necessary packages, like angular, angular-mocks, etc via bower
2. Install testem via npm:
    npm install testem -g
3. Edit testem.json
4. From my experience all files referenced in testem.json must be relative to the testem.json directory. Somehow
the "../" prefix to the path is not working. This is the reason all files are in lib and src.
5. Run: testem



