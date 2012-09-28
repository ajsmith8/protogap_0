Protogap0.Views.ScoresShow = Backbone.View.extend({
	
	template: JST['scores/show'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.comment = this.attr.comments.where({id: options.comment.get('id')})[0];
		
		this.attr.scores.on('change', this.render, this);
	},
	
	render: function() {
		if (this.attr.scores.where({comment_id: this.comment.get('id'), user_id: this.attr.current_user.get('id')})[0]) {
			this.user_score = this.attr.scores.where({comment_id: this.comment.get('id'), user_id: this.attr.current_user.get('id')})[0];
		}
		$(this.el).html(this.template({
			score: this.getScore(),
			user_score: this.user_score
		}));
		return this;
	},
	
	getScore: function() {
		var sum = 0;
		var scores = this.attr.scores.where({comment_id: this.comment.get('id')});
		
		for (i = 0; i < scores.length; i++) {
			sum = sum + scores[i].get('value');
		}
		return sum;
	}
});