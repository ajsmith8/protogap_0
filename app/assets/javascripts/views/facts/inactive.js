Protogap0.Views.FactsInactive = Backbone.View.extend({
	
	template: JST['facts/inactive'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.fact = this.attr.facts.where({id: options.fact.get('id')})[0];
	},
	
	render: function() {
		var that = this;
		$(this.el).html(this.template({
			fact: this.fact
		}));
		setTimeout(function() {
			that.renderComments();
			that.renderVotes();
		}, 0);
		return this;
	},
	
	renderComments: function() {
		var view = new Protogap0.Views.CommentsInactive({
			attr: this.attr,
			fact: this.fact
		});
		$(this.el).find('#comments_number').html(view.render().el);
	},
	
	renderVotes: function() {
		var view = new Protogap0.Views.VotesInactive({
			attr: this.attr,
			fact: this.fact
		});
		$(this.el).find('#votes_number').html(view.render().el);
	}
});