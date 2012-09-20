Protogap0.Views.QuizzesActive = Backbone.View.extend({
	
	template: JST['quizzes/active'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.quiz = this.attr.facts.where({id: options.quiz.get('id')})[0];
	},
	
	render: function() {
		var that = this;
		$(this.el).html(this.template({
			quiz: this.quiz
		}));
		setTimeout(function() {
			if (that.attr.tasks.where({user_id: that.attr.current_user.get('id'), fact_id: that.quiz.get('id'), is_quiz: true})[0]) {
				that.renderAnswered();
			} else {
				that.renderAnswers();
			}
		}, 0);
		return this;
	},
	
	renderAnswered: function() {
		$(this.el).find('#answers').html(JST['quizzes/answered']({
			task: this.attr.tasks.where({user_id: this.attr.current_user.get('id'), fact_id: this.quiz.get('id'), is_quiz: true})[0],
			quiz: this.quiz
		}));
		var view = new Protogap0.Views.SourcesIndex({
			attr: this.attr,
			fact: this.quiz
		});
		$(this.el).find('#sources').html(view.render().el);
	},
	
	renderAnswers: function() {
		var view = new Protogap0.Views.QuizzesAnswers({
			attr: this.attr,
			quiz: this.quiz
		});
		$(this.el).find('#answers').html(view.render().el);
	}
});