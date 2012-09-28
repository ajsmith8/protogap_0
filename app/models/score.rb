class Score < ActiveRecord::Base
  attr_accessible :comment_id, :user_id, :value
  belongs_to :comment
end
