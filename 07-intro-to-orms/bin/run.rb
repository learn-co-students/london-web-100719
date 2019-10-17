#!/usr/bin/env ruby

# Pull in the code from the environment file, which has everything this file needs to run the app
require_relative '../config/environment'

TweetsApp.new.call
