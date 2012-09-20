Protogap0.Collections.Votes = Backbone.Collection.extend({

	model: Protogap0.Models.Vote,
	url: 'votes',
	
	addOrUpdate: function(fact, user, value) {
		var vote;

		if (this.where({fact_id: fact.get('id'), user_id: user.get('id')})[0]) {
			vote = this.where({fact_id: fact.get('id'), user_id: user.get('id')})[0];
			vote.set({score: vote.get('score') + value, votes: vote.get('votes') + 1});
			vote.save();
		} else {
			this.create({
				fact_id: fact.get('id'),
				user_id: user.get('id'),
				score: value,
				votes: 1
			});
		}
	}
});
