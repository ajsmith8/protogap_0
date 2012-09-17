class Score < ActiveRecord::Base
  attr_accessible :comment_id, :user_id, :score
  belongs_to :comment
end
