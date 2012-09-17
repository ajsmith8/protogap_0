class User < ActiveRecord::Base
  attr_accessible :name, :email, :provider, :uid, :token, :level, :xp, :votes, :is_temp_user
  has_many :user_tiers, dependent: :destroy
  has_many :tasks, dependent: :destroy
  
  def self.create_with_omniauth(auth, user)
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
      user.email = auth["info"]["email"]
      user.is_temp_user = false
      user.save
      return user
  end
end
