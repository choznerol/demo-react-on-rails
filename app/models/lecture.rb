class Lecture < ApplicationRecord
  has_one_attached :coverImage

  validates_presence_of :title
end
