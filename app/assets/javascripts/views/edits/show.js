Protogap0.Views.EditsShow = Backbone.View.extend({
	
	template: JST['edits/show'],
	
	events:{
		
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	}
});