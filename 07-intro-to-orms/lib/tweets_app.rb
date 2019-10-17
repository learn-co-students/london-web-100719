class TweetsApp # This class acts as our frontend, its only job is to interact with the user via input and output; it doesn't speak directly to the database

  def call
    puts 'Welcome to Twitter'

    puts 'Enter a username:'
    username = gets.chomp

    puts 'Enter a message:'
    message = gets.chomp

    # Making calls to our Tweet model - that's what talks to the database for us and performs the appropriate CRUD action
    tweet = Tweet.new({'username' => username, 'message' => message})
    tweet.save

    tweets = Tweet.all
    render(tweets)
  end

  # Private methods are only available within a class - we couldn't make an instance of TweetsApp in another file and call render on it, we can only call render within this class, like on line 17
  private

  def render(tweets)
    tweets.each.with_index(1) do |tweet, i|
      puts "#{i}. #{tweet.username} says: #{tweet.message}"
    end
  end
end
