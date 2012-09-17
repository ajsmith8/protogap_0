class UserTiersController < ApplicationController
  respond_to :json
  
  def index
    respond_with UserTier.all
  end
  
  def show
    respond_with UserTier.find(params[:id])
  end
  
  def create
    respond_with UserTier.create(params[:user_tier])
  end
  
  def update
    respond_with UserTier.update(params[:id], params[:user_tier])
  end
  
  def destroy
    respond_with UserTier.destroy(params[:id])
  end
end
