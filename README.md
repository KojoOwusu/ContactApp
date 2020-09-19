# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

-   Ruby version
    2.7.0

-   System dependencies
    Rack/Cors, Pg, Graphql, Graghql-rails, gem, puma

-   Configuration to run locally 

    run bundle install to install all dependencies specified in Gemfile and Gemfile.lock
-   Database creation
    N.B modify 'config/databases.yml' file and replace adapter with that of your preferred database: |postgresql|mysql|sqlite3
    also change username and password in the same config file.
    
    run rails db:create to create database    
    
    To start server locally run: 'rails s [ --binding 127.0.0.1] [-p PORTNUMBER] '
    
-   Database initialization
    Run rake db:migrate to create database migrations from schema. 
    Run rake db:seed to test by seeding database
    

-   Deployment instructions
    deployed to heroku 
-   app url: https://safe-earth-99320.herokuapp.com
    run heroku run rake db:migrate to run database migrations on heroku
    
    check if dyno is running by running 'heroku ps:scale web=1' or checking process status with 'heroku ps' 
    
    run 'heroku logs' to view logs in case of errors

