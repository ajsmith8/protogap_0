Protogap0.Views.CommentsShow = Backbone.View.extend({
	
	initialize: function(options) {
		this.attr = options.attr;
		this.comment = options.comment;
	},
	
	render: function() {
		$(this.el).attr('id', this.edit.get('id'));
		$(this.el).addClass('commentpanel border');
		return this;
	}
});
