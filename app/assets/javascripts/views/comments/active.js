Protogap0.Views.CommentsActive = Backbone.View.extend({
	
	template: JST['comments/active'],
	
	initialize: function(options) {
		this.attr = options.attr;
		this.comments = this.attr.comments.where({fact_id: options.fact.get('id')});
		
		this.attr.comments.on('add', this.render, this);
	},
	
	render: function() {
		$(this.el).addClass('commenting');
		$(this.el).html(this.template({
			comments: this.comments
		}));
		return this;
	}
});
