# Poduniverse
A podcast search web application created using Vue.js.

![Poduniverse Demo](https://i.imgur.com/ZfpHbYD.gif)

## Description
* **Poduniverse** is a podcast search web application.
* Poduniverse uses data fetched from the [Podcastindex](https://podcastindex-org.github.io/docs-api/#overview--example-code) API.
* A hosted version of the application can be found [here](https://poduniverse.netlify.app/).


## How to Use?
Create an account on [Podcastindex](https://api.podcastindex.org/) and obtain an API key and API secret.
 #### Project Setup  
1. Clone the repo
   ```
   git clone https://github.com/TheRevenant04/poduniverse.git
   ```

1. Create a .env
  
    Copy contents from the .env.example to the .env and set the following variables:
    ```
    VUE_APP_API_AUTH_KEY=Your API key
    VUE_APP_API_SECRET_KEY=Your API secret
    ```
  
1. Install dependencies.
   ```
   npm install
   ```
   
1. Run the project.
   ```
   npm run serve
   ```
   
1. Open a browser and access the following URL
   ```
   http://localhost:8080
   ```