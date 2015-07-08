class Idea < ActiveRecord::Base
  validates :title, presence: true, 
                    uniqueness: true
  validates :body, presence: true
                      
  default_scope { order(updated_at: :desc) }
  
  enum quality: { swill: 0, plausible: 1, genius: 2 }
  
  def up_quality
    genius? ? quality : up
  end
  
  def down_quality
    swill? ? quality : down
  end
  
  private
  
  def down
    plausible? ? 0 : 1
  end
  
  def up
    swill? ? 1 : 2
  end
end
