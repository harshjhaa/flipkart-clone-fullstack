# flipkart-clone-fullstack

# CLIENT SETUP

- PROJECT SETUP GUIDE FROM SCRATCH

  - Dependencies and Files -
    - npm i react react-dom
    - npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime babel-loader file-loader css-loader style-loader sass-loader sass
    - npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin copy-webpack-plugin mini-css-extract-plugin @pmmmwh/react-refresh-webpack-plugin webpack-bundle-analyzer
  - Create .bablerc file
  - Create webpack.config.js, webpack.common.js, webpack.dev.js, webpack.prod.js files
  - Create index.js, index.html, App.js files

  - Used i18next and react-i18next for localization (multiple language support)

# SERVER SETUP

- PROJECT SETUP GUIDE FROM SCRATCH
  - Dependencies and Files -
    - npm i express nodemon dotenv
    - make a .env folder and add the PORT (process.env.PORT)
    - create an index.js file and start server.
    - npm i mongoose
    - create a db.js file and connect with MongoDb using mongoose.
