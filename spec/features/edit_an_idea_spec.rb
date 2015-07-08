require 'rails_helper'

RSpec.describe'edit idea' do
  context 'with valid attributes' do

    before(:each) do
      Idea.create!(title: "Old Idea", body: "this is my idea.")
    end
    
    it "edits an idea" do
      visit ideas_path
      expect(page).to have_content("Old Idea")
      
      click_link "Edit"
      fill_in "Title", with: "New Idea" 
      click_button "Save"
      
      expect(page).to have_content("New Idea")
      expect(page).to have_content("Your idea has been updated!")
      expect(current_path).to eq(ideas_path)
    end
    
    it "does not edit an idea with invalid attributes" do
      visit ideas_path
      expect(page).to have_content("Old Idea")
      
      click_link "Edit"
      fill_in "Title", with: "" 
      click_button "Save"
      
      expect(page).to have_content("Old Idea")
      expect(page).to have_content("Title can't be blank")
      expect(current_path).to eq(ideas_path)
    end
  end
end