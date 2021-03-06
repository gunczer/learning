module.exports = {
    "env": {
        "browser": true,
        "jasmine": true
    },
    "plugins": ['angular', 'jasmine'],
    "extends": [
        "eslint:recommended", 
        "plugin:jasmine/recommended"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        // "semi": 0,
        "semi": [
            "error",
            "always"
        ],
        //"no-console": 0
    },
    "globals": {
        "angular": false,
        "inject": false,
        "module": false,
        "dump": false
    }
};