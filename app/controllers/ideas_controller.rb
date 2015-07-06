class IdeasController < ApplicationController
  respond_to :json, :html
  
  def index
    @ideas = Idea.all
  end
  
  def create
    title = params["title"]
    body = params["body"]
    @idea = Idea.create(title: title, body: body)
    
    respond_with @idea, status: 201, location: ideas_path
  end
end
