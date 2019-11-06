class Doctor < ApplicationRecord
  has_many :patients

  def has_patients?
    patients.size > 0
  end

  validates :name, {
    length: { in: 2..50 },
    uniqueness: true
  }
  validates :skillz, length: { in: 3..140 }
  validate :is_polite

  def is_polite
    if self.skillz.include? 'bread'
      errors.add(:skillz, "no one should talk about bread")
    end
  end
end
