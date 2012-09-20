Protogap0.Collections.Facts = Backbone.Collection.extend({

	model: Protogap0.Models.Fact,
	url: 'facts',
	
	comparator: function(fact) {
		return - fact.get('score');
	},
	
	resetScores: function(votes) {
		var score, fact_votes;
		this.each(function(fact) {
			score = 0;
			fact_votes = votes.where({fact_id: fact.get('id')});
			for (i = 0; i < fact_votes.length; i++) {
				score = score + fact_votes[i].get('score');
			}
			fact.set({score: score});
			fact.save();
		});
		this.checkOrder();
	},
	
	checkOrder: function() {
		var old_facts, new_facts, order_changed = false;
		old_facts = _.toArray(this);
		this.sort();
		new_facts = _.toArray(this);
		
		for (i = 0; i < new_facts.length; i++) {
			if (new_facts[i] !== old_facts[i]) {
				order_changed = true;
				break;
			}
		}
		
		if (order_changed) {
			this.trigger('order');
		}
	}
});
