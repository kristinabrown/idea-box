class IdeasController < ApplicationController
  respond_to :json
  
  def index
    @ideas = Idea.all
  end
  
  def create
    title = params["title"]
    body = params["body"]
    @idea = Idea.create(title: title, body: body)

    @idea.save
    respond_with @idea, status: 201, location: ideas_path
  end
  
  def update
  end
  
  def destroy
    @idea = Idea.find(params["id"].to_i)
    @idea.destroy
    
    respond_with "", status: 201, location: ideas_path
  end
  
  def up
    @idea = Idea.find(params["id"].to_i)
    new_quality = @idea.up_quality
    
    @idea.update_attribute(:quality, new_quality)
    respond_with @idea, status: 201, location: ideas_path
  end
  
  def down
    @idea = Idea.find(params["id"].to_i)
    new_quality = @idea.down_quality
    
    @idea.update_attribute(:quality, new_quality)
    respond_with @idea, status: 201, location: ideas_path
  end
end
