Protogap0.Views.PagesMiniProfile = Backbone.View.extend({

	template: JST['pages/mini_profile'],
	
	events: {
		
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	}
});