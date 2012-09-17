class EditsController < ApplicationController
  respond_to :json
  
  def index
    respond_with Edit.all
  end
  
  def show
    respond_with Edit.find(params[:id])
  end
  
  def create
    respond_with Edit.create(params[:edit])
  end
  
  def update
    respond_with Edit.update(params[:id], params[:edit])
  end
  
  def destroy
    respond_with Edit.destroy(params[:id])
  end
end
