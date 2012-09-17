Protogap0.Views.CommentsIndex = Backbone.View.extend({
	
	template: JST['comments/index'],
	
	events: {
		
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	}
});
