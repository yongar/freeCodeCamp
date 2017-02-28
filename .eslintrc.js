module.exports = {
    "extends": "eslint:recommended",
    "env":{
        "node" :true, 
        "jquery": true,
        "browser": true
    } ,
    "plugins": [
        "import"
    ],
    "rules":{

        "linebreak-style":0,
        "indent" : ["error", "tab"],
        "quotes": ["error", "double"],
        "semi" : ["error", "always", { "omitLastInOneLineBlock": true }],
        "comma-dangle" :["error", "never"],
        "curly": ["error", "all"],
        "no-console" : "off",
        "strict": "off"

    }
};