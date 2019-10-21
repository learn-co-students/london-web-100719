require 'bundler/setup'
Bundler.require

# Create a connection to our database via ActiveRecord and specify that we're using sqlite3
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: "db/development.sqlite"
)

# Set up logging for our ActiveRecord database connection. This means that whenever we call an ActiveRecord method that interacts with our database, it will output the resulting SQL to the terminal. To turn this off, simply change this line to ActiveRecord::Base.logger = nil
ActiveRecord::Base.logger = Logger.new(STDOUT)

# Uses a gem called require-all to pull all the code from every file in the app folder into this file
require_all 'app'
