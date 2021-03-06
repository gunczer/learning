module.exports = {
    "env": {
        "browser": true,
        "amd": true
    },
    "extends": "eslint:recommended",
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
        "semi": [
            "error",
            "always"
        ]
    },
    "globals": {
        "angular": true
    }
};