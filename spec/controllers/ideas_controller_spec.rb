require 'rails_helper'

RSpec.describe IdeasController, type: :controller do
  describe "GET index" do
    it "renders the index" do
      idea = Idea.create(title: "title", body: "body")
      get :index
      expect(assigns(:ideas)).to eq([idea])
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "POST create" do
    it "returns stuff" do
      xhr :post, :create, {title: "title",  body: "body"}
        
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "DELETE destroy" do
    it "returns stuff" do
      idea = Idea.create(title: "title", body: "body")
      xhr :post, :destroy, {id: idea.id}
        
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "POST up" do
    it "returns stuff" do
      idea = Idea.create(title: "title", body: "body")
      xhr :post, :up, {id: idea.id}
        
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "POST down" do
    it "returns stuff" do
      idea = Idea.create(title: "title", body: "body")
      xhr :post, :down, {id: idea.id}
        
      expect(response).to have_http_status(:success)
    end
  end
end
