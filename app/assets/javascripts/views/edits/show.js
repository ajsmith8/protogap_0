Protogap0.Views.EditsShow = Backbone.View.extend({
	
	initialize: function(options) {
		this.attr = options.attr;
		this.edit = options.edit;
	},
	
	render: function() {
		$(this.el).attr('id', this.edit.get('id'));
		$(this.el).addClass('editpanel border');
		return this;
	}
});