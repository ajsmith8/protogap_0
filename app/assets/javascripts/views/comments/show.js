Protogap0.Views.CommentsShow = Backbone.View.extend({
	
	template: JST['comments/show'],
	
	events: {
		
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	}
});
