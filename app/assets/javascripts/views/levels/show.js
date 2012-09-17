Protogap0.Views.LevelsShow = Backbone.View.extend({

	template: JST['levels/show'],
	
	events: {
		
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	}
});