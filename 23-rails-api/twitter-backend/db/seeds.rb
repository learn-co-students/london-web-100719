# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ben = Planet.create({name: 'ben', description: "very long decrtipng sghortgnlsdfjg fsdhglsdjhg ljh" })

Person.create([
    { planet: ben, name: 'luke', birth_year: 'i am scottish' },
    { planet: ben, name: 'leia', birth_year: 'i have a beard' },
    { planet: ben, name: 'r2d2', birth_year: 'i play in a colliary band' }
])