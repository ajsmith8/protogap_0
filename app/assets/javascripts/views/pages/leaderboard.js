Protogap0.Views.PagesLeaderboard = Backbone.View.extend({

	template: JST['pages/leaderboard'],
	
	events: {
		
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	}
});