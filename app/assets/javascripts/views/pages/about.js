Protogap0.Views.PagesAbout = Backbone.View.extend({

	template: JST['pages/about'],
	
	events: {
		
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	}
});