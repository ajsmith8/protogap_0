Protogap0.Views.FactsTopicInactive = Backbone.View.extend({

	template: JST['facts/topic_inactive'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.topic = this.attr.topics.where({id: options.topic.get('id')})[0];
		
		this.attr.facts.on('change', this.render, this);
	},
	
	render: function() {
		$(this.el).html(this.template({
			facts: this.attr.facts.where({topic_id: this.topic.get('id')})
		}));
		return this;
	}
});