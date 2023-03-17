#!/bin/bash
npm init -y
npm install --save-dev --save-exact prettier webpack webpack-cli eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier
touch .prettierrc.json .eslintrc.json .gitignore .prettierignore

echo "{
  \"semi\": false,
  \"tabWidth\": 4,
  \"singleQuote\": true,
  \"bracketSpacing\": true,
  \"printWidth\": 140,
  \"htmlWhitespaceSensitivity\": \"ignore\"
}" > .prettierrc.json

echo "{
  \"env\": {
    \"browser\": true,
    \"commonjs\": true,
    \"es2021\": true
  },
  \"extends\": [\"airbnb-base\", \"prettier\"],
  \"parserOptions\": {
    \"ecmaVersion\": \"latest\"
  },
  \"rules\": {
    \"no-console\": \"off\"
  }
}" > .eslintrc.json

echo "node_modules/" > .gitignore

echo "# Ignore artifacts:
build
coverage" > .prettierignore
