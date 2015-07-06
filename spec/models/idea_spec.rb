require 'rails_helper'

RSpec.describe Idea, type: :model do
  context "with attributes" do
    let(:idea) {Idea.create(title: "Idea", 
                            body: "this is my idea.",
                            quality: 0)
                }
    it "is valid" do
      expect(idea).to be_valid
    end
    
    it "is invalid withough title" do
      idea.title = nil
      
      expect(idea).to_not be_valid
    end
    
    it "is invalid withough body" do
      idea.body = nil
      
      expect(idea).to_not be_valid
    end
    
    it "is invalid withough quality" do
      idea.quality = nil
      
      expect(idea).to_not be_valid
    end
    
    it "it can only have value of 0, 1, or 2" do
      idea.quality = 3
      idea1 = Idea.create(title: "Idea1", 
                           body: "this is my idea.",
                           quality: 1)
      idea2 = Idea.create(title: "Idea2", 
                           body: "this is my idea.",
                           quality: 2)
      
      expect(idea).to_not be_valid
      expect(idea1).to be_valid
      expect(idea2).to be_valid
    end
    
    it "has to have a unique title" do
      idea1 = Idea.create(title: "Idea", 
                           body: "this is my idea.",
                           quality: 1)
      
      expect(Idea.count).to eq(1)
    end
  end
end
