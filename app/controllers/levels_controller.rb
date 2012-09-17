class LevelsController < ApplicationController
  respond_to :json
  
  def index
    respond_with Level.all
  end
  
  def show
    respond_with Level.find(params[:id])
  end
  
  def create
    respond_with Level.create(params[:level])
  end
  
  def update
    respond_with Level.update(params[:id], params[:level])
  end
  
  def destroy
    respond_with Level.destroy(params[:id])
  end
end
