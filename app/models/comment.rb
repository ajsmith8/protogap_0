class Comment < ActiveRecord::Base
  attr_accessible :user_id, :fact_id, :content, :score, :ancestry
  belongs_to :fact
  has_many :scores, dependent: :destroy
end
