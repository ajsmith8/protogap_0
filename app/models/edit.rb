class Edit < ActiveRecord::Base
  attr_accessible :user_id, :fact_id, :topic_id, :title, :description, :image, :type, :urls,
                  :has_quiz, :question, :correct, :wrong1, :wrong2, :wrong3
  belongs_to :fact
end
