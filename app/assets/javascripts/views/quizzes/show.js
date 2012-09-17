Protogap0.Views.QuizzesShow = Backbone.View.extend({

	initialize: function(options) {
		this.attr = options.attr;
		this.fact = options.fact;
	},
	
	render: function() {
		$(this.el).attr('id', this.fact.get('id'));
		$(this.el).addClass('quizpanel border');
		return this;
	}	
});