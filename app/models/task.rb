class Task < ActiveRecord::Base
  attr_accessible :fact_id, :user_id, :is_quiz, :answer, :xp
  belongs_to :user
end
