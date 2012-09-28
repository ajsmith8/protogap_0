Protogap0.Views.CommentsCreate = Backbone.View.extend({

	template: JST['comments/create'],
	
	events: {
		'submit #newcomment' : 'createComment'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.fact = this.attr.facts.where({id: options.fact.get('id')})[0];
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	},
	
	createComment: function(event) {
		event.preventDefault();
	}
});