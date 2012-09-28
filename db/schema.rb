# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120921171622) do

  create_table "comments", :force => true do |t|
    t.integer  "user_id"
    t.integer  "fact_id"
    t.text     "content"
    t.integer  "score",      :default => 0
    t.string   "ancestry"
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  create_table "edits", :force => true do |t|
    t.integer  "user_id"
    t.integer  "fact_id"
    t.integer  "topic_id"
    t.text     "title"
    t.text     "description"
    t.text     "image"
    t.string   "category"
    t.text     "urls"
    t.boolean  "has_quiz"
    t.text     "question"
    t.string   "correct"
    t.string   "wrong1"
    t.string   "wrong2"
    t.string   "wrong3"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "facts", :force => true do |t|
    t.integer  "topic_id"
    t.text     "title"
    t.text     "description"
    t.text     "image"
    t.string   "category"
    t.boolean  "has_quiz"
    t.text     "question"
    t.string   "correct"
    t.string   "wrong1"
    t.string   "wrong2"
    t.string   "wrong3"
    t.integer  "score",       :default => 0
    t.boolean  "is_approved"
    t.datetime "created_at",                 :null => false
    t.datetime "updated_at",                 :null => false
    t.integer  "edit_id"
  end

  create_table "levels", :force => true do |t|
    t.integer  "level"
    t.integer  "xp_to_lvl"
    t.string   "image"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "scores", :force => true do |t|
    t.integer  "comment_id"
    t.integer  "user_id"
    t.integer  "value"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "sources", :force => true do |t|
    t.integer  "fact_id"
    t.text     "url"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "tasks", :force => true do |t|
    t.integer  "fact_id"
    t.integer  "user_id"
    t.boolean  "is_quiz"
    t.string   "answer"
    t.integer  "xp"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "tiers", :force => true do |t|
    t.integer  "level"
    t.integer  "xp_to_lvl"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "topics", :force => true do |t|
    t.string   "title"
    t.integer  "score",       :default => 0
    t.boolean  "is_approved"
    t.datetime "created_at",                 :null => false
    t.datetime "updated_at",                 :null => false
  end

  create_table "user_tiers", :force => true do |t|
    t.integer  "user_id"
    t.integer  "topic_id"
    t.integer  "level",      :default => 1
    t.integer  "xp",         :default => 0
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "provider"
    t.string   "uid"
    t.string   "token"
    t.integer  "level",        :default => 1
    t.integer  "xp",           :default => 0
    t.integer  "votes",        :default => 0
    t.boolean  "is_temp_user", :default => true
    t.boolean  "is_admin"
    t.datetime "created_at",                     :null => false
    t.datetime "updated_at",                     :null => false
  end

  create_table "votes", :force => true do |t|
    t.integer  "user_id"
    t.integer  "topic_id"
    t.integer  "fact_id"
    t.integer  "score"
    t.integer  "votes"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

end
