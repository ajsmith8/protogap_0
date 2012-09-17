Protogap0.Views.QuizzesActive = Backbone.View.extend({
	
	template: JST['quizzes/active'],
	
	events: {
		
	},
	
	initialize: function(options) {
		
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	}
});