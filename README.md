# Inventory Management Simulator

## Description

Eat me is an application that is designed to allow users to easily share and view recipes. Deployed at https://eat-me-p2.herokuapp.com/

## Examples of how to use each part of the application

1. The dashboard 
    !Screenshot](Images/Customer-Interface.png)
   * Displays all of the recipes
   * Clicking on the image of a recipe will pull up basic information about the recipe
   * Clicking on the recipe link pulls up a page with a detailed ingredient list and cooking instructions
   * Clicking on the "+" button allows you to add a recipe of your own
   * You can search the page for recipes by name or by ingredient

## Preview
    
A video preview of the application running with voice commentary (audio quality is low)


## Requirements:

  * Add `.env` file with the following content:

  ```
  SEQUELIZE_USER=your_mysql_db_user
  SEQUELIZE_PASSWORD=your_mysql_db_password
  SEQUELIZE_HOST=your_mysql_db_host
  AUTH_SECRET=your_auth_secret_key
  ADMIN_USER_PWD=admin_password
  USER_PWD=user_pwd
  FORCE_SYNC=true_or_false
  ```

## Technologies Used
   
   * MySql
   * Node.js
   * Javascript
   * Sequelize
   * Travis CI
   * Materialize Framework
   * ESLint
   * HTML
   * CSS
   
