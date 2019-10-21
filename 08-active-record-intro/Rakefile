# A Rakefile allows us to define terminal commands that will use a gem called Rake to run tasks for us

require_relative './config/environment'
# Pulls in all of ActiveRecord's built-in Rake commands, such as rake db:create_migration (Creates a migration file), rake db:migrate (Runs all pending migration files in order to change your database) and rake db:seed (Runs a file called seeds.rb in your db folder in order to seed your database with data)
require 'sinatra/activerecord/rake'

# Defining a rake task - this means that when I type rake console in my terminal, I will begin a Pry session
desc "Start our app console"
task :console do
  Pry.start
end
