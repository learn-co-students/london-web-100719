class User < ApplicationRecord
  has_secure_password
  has_many :pets, dependent: :destroy
  validates_format_of :email, with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
end
