Protogap0.Views.CommentsInactive = Backbone.View.extend({
	
	template: JST['comments/inactive'],
	
	initialize: function(options) {
		this.attr = options.attr;
		this.comments = this.attr.comments.where({fact_id: options.fact.get('id')});
		
		this.attr.comments.on('add', this.render, this);
	},
	
	render: function() {
		$(this.el).html(this.template({
			comments: this.comments
		}));
		return this;
	}
});
