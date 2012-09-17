class Fact < ActiveRecord::Base
  attr_accessible :topic_id, :title, :description, :image, :type, :has_quiz,
                  :question, :correct, :wrong1, :wrong2, :wrong3, :score, :is_approved
  belongs_to :topic
  has_many :edits, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :sources, dependent: :destroy
end
