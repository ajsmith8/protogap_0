Protogap0.Collections.Topics = Backbone.Collection.extend({

	model: Protogap0.Models.Topic,
	url: 'topics',
	
	comparator: function(topic) {
		return - topic.get('score');
	}
});
