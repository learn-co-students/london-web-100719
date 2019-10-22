# Require relative allows us to pull in code from another file in our file system into this file
require_relative "app.rb" # We define all the methods the app needs to run in the app.rb file. This means that all this run file needs to do is call on the run method. We've separated the definition/implementation of how our app actually works from the execution of actually running it.
run
