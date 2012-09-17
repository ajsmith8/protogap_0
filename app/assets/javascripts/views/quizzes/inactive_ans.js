Protogap0.Views.QuizzesInactiveAns = Backbone.View.extend({
	
	template: JST['quizzes/inactive_ans'],
	
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