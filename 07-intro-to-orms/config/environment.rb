require 'bundler'
Bundler.require # Requires all gems specified in our Gemfile

# Create a new instance of SQLite3::Database to allow us to connect to our twitter.db database
DB = {
  conn: SQLite3::Database.new('db/twitter.db')
}

# This means any results we get back from the database will come back as a hash to represent a row, with keys for the column names, rather than as an array, which is the default format
DB[:conn].results_as_hash = true

# Pull in the code from the files that define our Tweet and TweetsApp classes
require_relative '../lib/tweet.rb'
require_relative '../lib/tweets_app.rb'
