class Idea < ActiveRecord::Base
  validates :title, presence: true, 
                    uniqueness: true
  validates :body, presence: true
  validates :quality, presence: true, 
                      inclusion: { in: [0, 1, 2]}
end
