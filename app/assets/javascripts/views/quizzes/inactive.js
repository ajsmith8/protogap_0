Protogap0.Views.QuizzesInactive = Backbone.View.extend({
	
	template: JST['quizzes/inactive'],
	
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