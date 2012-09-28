Protogap0.Views.QuizzesShow = Backbone.View.extend({

	initialize: function(options) {
		this.attr = options.attr;
		this.quiz = options.quiz;
		this.quizzes = options.quizzes;
	},
	
	render: function() {
		$(this.el).attr('id', this.quiz.get('id'));
		$(this.el).addClass('quiz panel');
		if (this.quiz.get('id') === this.quizzes[0].get('id')) {
			$(this.el).addClass('top');
		}
		if (this.quiz.get('id') === this.quizzes[this.quizzes.length - 1].get('id')) {
			$(this.el).addClass('bottom');
		}
		return this;
	}	
});