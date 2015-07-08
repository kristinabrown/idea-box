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
    
    it "is invalid without title" do
      idea.title = nil
      
      expect(idea).to_not be_valid
    end
    
    it "is invalid without body" do
      idea.body = nil
      
      expect(idea).to_not be_valid
    end
    
    it "has to have a unique title" do
      Idea.create(title: "Idea", 
                  body: "this is my idea.",
                  quality: 1)
      
      expect(Idea.count).to eq(1)
    end
    
    it "is scoped to list the newest first" do
      Idea.create(title: "newerIdea", 
                  body: "this is my idea.",
                  quality: 1)
                           
      expect(Idea.first.title).to eq("newerIdea")
    end
    
    it "can go up in quality from swill" do
      expect(idea.quality).to eq("swill")
      new_quality = idea.up_quality
      idea.update(quality: new_quality)
      
      expect(idea.quality).to eq("plausible")
    end
    
    it "can go up in quality from plausible" do
      idea1 = Idea.create(title: "newerIdea", 
                           body: "this is my idea.",
                           quality: 1)
      expect(idea1.quality).to eq("plausible")
      new_quality = idea1.up_quality
      idea1.update(quality: new_quality)
      
      expect(idea1.quality).to eq("genius")
    end
    
    it "can't go up from genius" do
      idea1 = Idea.create(title: "newerIdea", 
                           body: "this is my idea.",
                           quality: 2)
      expect(idea1.quality).to eq("genius")
      new_quality = idea1.up_quality
      idea1.update(quality: new_quality)
      
      expect(idea1.quality).to eq("genius")
    end
    
    it "can go down in quality from plausible" do
      idea1 = Idea.create(title: "newerIdea", 
                           body: "this is my idea.",
                           quality: 1)
      expect(idea1.quality).to eq("plausible")
      
      new_quality = idea1.down_quality
      idea1.update(quality: new_quality)
      
      expect(idea1.quality).to eq("swill")
    end
    
    it "can go down in quality from genius" do
      idea1 = Idea.create(title: "newerIdea", 
                           body: "this is my idea.",
                           quality: 2)
      expect(idea1.quality).to eq("genius")
      
      new_quality = idea1.down_quality
      idea1.update(quality: new_quality)
      
      expect(idea1.quality).to eq("plausible")
    end
    
    it "cannot go down in quality from swill" do
      idea1 = Idea.create(title: "newerIdea", 
                           body: "this is my idea.",
                           quality: 0)
      expect(idea1.quality).to eq("swill")
      
      new_quality = idea1.down_quality
      idea1.update(quality: new_quality)
      
      expect(idea1.quality).to eq("swill")
    end
  end
end
