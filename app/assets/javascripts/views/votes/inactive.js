Protogap0.Views.VotesInactive = Backbone.View.extend({
	
	template: JST['votes/inactive'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.fact = this.attr.facts.where({id: options.fact.get('id')})[0];
		
		this.attr.votes.on('change', this.render, this);
	},
	
	render: function() {
		$(this.el).html(this.template({
			score: this.getVotes()
		}));
		return this;
	},
	
	getVotes: function() {
		var votes = this.attr.votes.where({fact_id: this.fact.get('id')});
		var sum = 0;
		
		for (i = 0; i < votes.length; i++) {
			sum = sum + votes[i].get('score');
		}
		
		return sum;
	}
});