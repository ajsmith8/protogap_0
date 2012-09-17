class ScoresController < ApplicationController
  respond_to :json
  
  def index
    respond_with Score.all
  end
  
  def show
    respond_with Score.find(params[:id])
  end
  
  def create
    respond_with Score.create(params[:score])
  end
  
  def update
    respond_with Score.update(params[:id], params[:score])
  end
  
  def destroy
    respond_with Score.destroy(params[:id])
  end
end
