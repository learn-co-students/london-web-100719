require 'pry'

class Tweet
  @@all = []
  attr_accessor :content, :user

  def initialize(content, user)
    @content = content
    @user = user
    @@all << self
  end

  def self.find_by_content(content)
    self.all.find {|t| t.content == content}
  end

  def self.all
    @@all
  end

  def likes
    Like.all.select { |like| like.tweet == self }
  end

  def users_who_liked
    self.likes.map { |like| like.user }.uniq
  end

end

class User

  attr_accessor :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def like_a_tweet(tweet)
    Like.new(self, tweet)
  end

  def likes
    Like.all.select { |like| like.user == self }
  end

  def liked_tweets
    self.likes.map { |like| like.tweet }
  end

  def num_of_likes
    self.likes.size
  end

  def tweets
    Tweet.all.select { |tweet| tweet.user == self }
  end

  def post_a_tweet(content)
    Tweet.new(content, self)
  end

end

class Like

  attr_accessor :user, :tweet
  @@all = []

  def initialize(user, tweet)
    @user = user
    @tweet = tweet
    @@all << self
  end

  def self.all
    @@all
  end

end

# test data
dan = User.new('daniel')
serg = User.new('sergio')

t1 = Tweet.new('hi', dan)
t2 = Tweet.new('my 2nd tweet', dan)
t3 = Tweet.new('unpopular political opinion', dan)

t4 = Tweet.new('hi dan', serg)
t5 = Tweet.new('unpopular political opinion again', serg)

Tweet.all.each do |tweet|
  dan.like_a_tweet(tweet)
end

serg.tweets.each do |tweet|
  serg.like_a_tweet(tweet)
  dan.like_a_tweet(tweet)
end

binding.pry
p 'eof'
