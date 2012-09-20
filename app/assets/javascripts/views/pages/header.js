Protogap0.Views.PagesHeader = Backbone.View.extend({

	template: JST['pages/header'],
	
	events: {
		'click #top_logo' : 'pagesHome'
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	},
	
	pagesHome: function() {
		Backbone.history.navigate('', true);
	}
});