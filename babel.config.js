module.exports = function(api){
  api.cache(true);
  return{
    presets: ['module:metro-react-native-babel-preset',
  ],
    "plugins": ["@babel/plugin-transform-runtime", 'react-native-reanimated/plugin',],
    "env":{
      "production":{
        "plugins":["transform-remove-console",
        ["module:react-native-dotenv", {
          "moduleName": "@env",
          "path": ".env",
          "blacklist": null,
          "whitelist": null,
          "safe": false,
          "allowUndefined": true
        }]
      ]
      }
    }
  };
  };