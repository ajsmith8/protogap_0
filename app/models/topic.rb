class Topic < ActiveRecord::Base
  attr_accessible :title, :score, :is_approved
  has_many :facts, dependent: :destroy
  has_many :user_tiers, dependent: :destroy
end
