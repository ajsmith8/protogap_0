class TiersController < ApplicationController
  respond_to :json
  
  def index
    respond_with Tier.all
  end
  
  def show
    respond_with Tier.find(params[:id])
  end
  
  def create
    respond_with Tier.create(params[:tier])
  end
  
  def update
    respond_with Tier.update(params[:id], params[:tier])
  end
  
  def destroy
    respond_with Tier.destroy(params[:id])
  end
end
