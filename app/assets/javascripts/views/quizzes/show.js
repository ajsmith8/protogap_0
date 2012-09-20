Protogap0.Views.QuizzesShow = Backbone.View.extend({

	initialize: function(options) {
		this.attr = options.attr;
		this.quiz = options.quiz;
	},
	
	render: function() {
		$(this.el).attr('id', this.quiz.get('id'));
		$(this.el).addClass('quizpanel border');
		return this;
	}	
});