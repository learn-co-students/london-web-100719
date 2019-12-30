npm init -y

src
src/js
public

npm install babel-cli babel-preset-env --save-dev

"build": "babel src -d public"

.babelrc

```
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "browsers": ["last 2 versions", "safari >= 7"]
        }
      }
    ]
  ]
}
```

write JS!

npm run build

import/export

npm install webpack webpack-cli --save-dev

"scripts": {
"build": "webpack --config webpack.config.js"
},

webpack.config.js

```
const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  }
};
```

npm run build

npm install babel-loader babel-core --save-dev

webpack.config.js

```
module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      }
    ]
  }
};
```

npm run build
