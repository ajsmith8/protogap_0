class UserTier < ActiveRecord::Base
  attr_accessible :user_id, :topic_id, :level, :xp
  belongs_to :user
  belongs_to :topic
end
