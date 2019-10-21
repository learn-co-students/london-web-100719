class Author < ActiveRecord::Base
  # Tells ActiveRecord to create a books method for instances of author that will return an array of every instance of book that belongs to that author
  has_many :books
end

# Example of how to create ActiveRecord methods for a many-to-many through relationship - first establish the belongs_to and has_many methods for the one-to-many relationships and then use the has_many methods as the through in order to get the many-to-many
# class Appointment
#   belongs_to :doctor
#   belongs_to :patient
# end
#
# class Doctor
#   has_many :appointments
#   has_many :patients, through: :appointments
# end
#
# class Patient
#   has_many :appointments
#   has_many :doctors, through: :appointments
# end
