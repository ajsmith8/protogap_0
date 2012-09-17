Protogap0.Collections.Facts = Backbone.Collection.extend({

	model: Protogap0.Models.Fact,
	url: 'facts',
	
	comparator: function(reason) {
		return - reason.get('score');
	}
});
