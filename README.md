# README

#Install
It's recommended to use Ruby 2.5.0 and NodeJS 10.14.x.

```
## install bundler if not available
gem install bundler

## install gem dependencies
bundle install

## install npm dependencies
npm install

# create the postgres databases
# update config/database.yml details if needed
rake db:create

# generate assets for development
npm run webpack

# start server
rails s
```
