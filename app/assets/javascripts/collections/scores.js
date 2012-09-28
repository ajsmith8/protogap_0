Protogap0.Collections.Scores = Backbone.Collection.extend({

	model: Protogap0.Models.Score,
	url: 'scores',
	
	addOrUpdate: function(comment, user, value) {
		var score;
		
		if (this.where({comment_id: comment.get('id'), user_id: user.get('id')})[0]) {
			score = this.where({comment_id: comment.get('id'), user_id: user.get('id')})[0];
			score.set({value: value});
			score.save();
		} else {
			this.create({
				comment_id: comment.get('id'),
				user_id: user.get('id'),
				value: value
			});
		}
	}
});
