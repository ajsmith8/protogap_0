Protogap0.Views.PagesTeam = Backbone.View.extend({

	template: JST['pages/team'],
	
	events: {
		
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	}
});