Protogap0.Views.FactsTopicActive = Backbone.View.extend({

	template: JST['facts/topic_active'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.topic = this.attr.topics.where({id: options.topic.get('id')})[0];
	},
	
	render: function() {
		$(this.el).html(this.template({
			pros: this.attr.facts.where({topic_id: this.topic.get('id'), category: 'pro'}),
			cons: this.attr.facts.where({topic_id: this.topic.get('id'), category: 'con'}),
			intro: this.attr.facts.where({topic_id: this.topic.get('id'), category: 'intro'})
		}));
		return this;
	}
});