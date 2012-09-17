Protogap0.Views.EditsIndex = Backbone.View.extend({

	template: JST['edits/index'],
	
	events: {
		
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	}
});
