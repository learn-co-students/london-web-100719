class Tweet
  attr_accessor :message, :username, :id

  # READ
  def self.all
    # Define our SQL
    sql = "SELECT * FROM tweets;"
    # Execute it via our connection to the database, which returns an array of hashes which represent rows in the table
    results = DB[:conn].execute(sql)
    # Hydrate the results
    self.hydrate(results)
  end

  def self.hydrate(results)
    # Take our array of hashes from the database and turn it into an array of instances of Tweet
    results.map { |result| Tweet.new(result) }
  end

  # Takes a hash as an argument and sets the values of the instance variables to the values of the corresponding keys
  def initialize(props={})
    @message = props['message']
    @username = props['username']
    @id = props['id']
  end

  def save
    if self.id # If this instance has an id, it means it has already been to the database, so we update it; otherwise, we create it for the first time
      # UPDATE
      sql = "UPDATE tweets SET message = ?, username = ? WHERE id = ?;" # We use ? rather than directly interpolating the value in order to sanitise our data and prevent SQL injection
      DB[:conn].execute(sql, self.message, self.username, self.id)
    else
      # CREATE
      sql = "INSERT INTO tweets(message, username) VALUES(?, ?);"
      DB[:conn].execute(sql, self.message, self.username)

     # After we save this record to the database, it will be assigned an id. Here, we set the id of the instance by getting the id of the row we just added to the tweets table
     @id = DB[:conn].execute("SELECT last_insert_rowid() FROM tweets").first["last_insert_rowid()"]
    end
  end

  # DELETE

  # Destroy via a class method - pass in the id of the tweet we're looking for and delete that specific one from the database
  def self.destroy(id)
    sql = "DELETE FROM tweets WHERE id = ?;"
    DB[:conn].execute(sql, id)
  end

  # Destroy via an instance method - look at the id of the instance of tweet we called this method on and delete that specific one from the database
  def destroy
    sql = "DELETE FROM tweets WHERE id = ?;"
    DB[:conn].execute(sql, self.id)
  end
end
