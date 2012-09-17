Protogap0.Views.EditsCreate = Backbone.View.extend({
	
	template: JST['edits/create'],
	
	events:{
		
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	}
});