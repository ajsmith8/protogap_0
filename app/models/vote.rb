class Vote < ActiveRecord::Base
  attr_accessible :user_id, :topic_id, :fact_id, :score, :votes
  belongs_to :fact
end
