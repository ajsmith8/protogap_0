Protogap0.Views.QuizzesTopRight = Backbone.View.extend({
	
	template: JST['quizzes/top_right'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.quiz = options.quiz;
	},
	
	render: function() {
		$(this.el).html(this.template({
			task: this.attr.tasks.where({user_id: this.attr.current_user.get('id'), fact_id: this.quiz.get('id'), is_quiz: true})[0]
		}));
		return this;
	}
});