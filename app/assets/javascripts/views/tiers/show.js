Protogap0.Views.TiersShow = Backbone.View.extend({

	template: JST['tiers/show'],
	
	events: {

	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	}
});