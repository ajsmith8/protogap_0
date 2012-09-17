class PagesController < ApplicationController
  def main
    if !session[:user_id]
      user = User.new
      user.save
      session[:user_id] = user.id
      redirect_to root_url
    end
  end
end
