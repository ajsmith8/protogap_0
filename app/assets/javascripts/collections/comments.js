Protogap0.Collections.Comments = Backbone.Collection.extend({
	
	model: Protogap0.Models.Comment,
	url: 'comments',
	
	comparator: function(comment) {
		return - comment.get('score');
	},
	
	resetScores: function(scores) {
		var score, com_scores;
		this.each(function(com) {
			score = 0;
			com_scores = scores.where({comment_id: com.get('id')});
			for (i = 0; i < com_scores.length; i++) {
				score = score + com_scores[i].get('value');
			}
			com.set({score: score});
			com.save();
		});
		this.checkOrder();
	},
	
	checkOrder: function() {
		var new_comms = [], old_comms = [], new_com = [], old_com = [];
		var depth = 2, order_changed = false;
		old_comms = _.toArray(this);
		this.sort();
		new_comms = _.toArray(this);
		
		old_com = this.getArray(old_comms, 0);
		new_com = this.getArray(new_comms, 0);
		
		while (old_com.length > 0 && new_com.length > 0 && !order_changed) {
			for (i = 0; i < new_com.length; i++) {
				if (new_com[i] !== old_com[i]) {
					order_changed = true;
					break;
				}
			}
			
			if (order_changed) {
				this.trigger('order');
				break;
			}
			
			old_com = this.getArray(old_comms, depth);
			new_com = this.getArray(new_comms, depth);
			
			depth = depth + 1;
		}
	},
	
	getArray: function(comments, depth) {
		var array = [];
		
		for (i = 0; i < comments.length; i++) {
			if (depth === 0) {
				if (!comments[i].get('ancestry')) {
					array.push(comments[i]);
				}
			} else {
				if (comments[i].get('ancestry') && comments[i].get('ancestry').split('/').length === depth) {
					array.push(comments[i]);
				}
			}
		}
		return array;
	}
});
