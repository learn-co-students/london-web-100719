-- Read all the columns for every single artist
SELECT * FROM artists;

-- Read the name of the artist who has the name Black Sabbath
SELECT name FROM artists WHERE name = 'Black Sabbath';

-- Create a new table called fan_clubs that keeps track of all the fan_clubs for artists
CREATE TABLE fan_clubs(
  id INTEGER PRIMARY KEY,
  name TEXT,
  artist_id INTEGER
);

-- Create a new fan_club row
INSERT INTO fan_clubs(name, artist_id) VALUES('Audioslaves', 8);

-- Change the name of the artist with name of Black Sabbath to Blick Sibbith
UPDATE artists SET name = 'Blick Sibbith' WHERE name = 'Black Sabbath';

-- Delete the artist with the name Blick Sibbith
DELETE FROM artists WHERE name = 'Blick Sibbith';


-- Read the name of every fan_club, with the name of their artist next to them
SELECT artists.name AS "Artist Name", fan_clubs.name AS "Fan Club Name" FROM artists
INNER JOIN fan_clubs ON fan_clubs.artist_id = artists.id;
