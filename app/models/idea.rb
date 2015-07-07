class Idea < ActiveRecord::Base
  validates :title, presence: true, 
                    uniqueness: true
  validates :body, presence: true
                      
  default_scope { order(created_at: :desc) }
  
  enum quality: { swill: 0, plausible: 1, genius: 2 }
  
  def up_quality
    if swill?
      1
    elsif plausible?
      2
    else
      quality
    end
  end
  
  def down_quality
    if plausible?
      0
    elsif genius?
      1
    else
      quality
    end
  end
end
