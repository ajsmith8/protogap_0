Protogap0.Views.QuizzesInactive = Backbone.View.extend({
	
	template: JST['quizzes/inactive'],
	
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
			that.renderTopRight();
		}, 0);
		return this;
	},
	
	renderTopRight: function() {
		var view = new Protogap0.Views.QuizzesTopRight({
			attr: this.attr,
			quiz: this.quiz
		});
		$(this.el).find('#top_right_symbol').html(view.render().el);
	}
});