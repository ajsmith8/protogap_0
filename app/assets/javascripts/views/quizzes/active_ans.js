Protogap0.Views.QuizzesActiveAns = Backbone.View.extend({
	
	template: JST['quizzes/active_ans'],
	
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