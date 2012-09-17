Protogap0.Views.TopicsInactive = Backbone.View.extend({
	
	template: JST['topics/inactive'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.topic = this.attr.topics.where({id: options.topic.get('id')})[0];
	},
	
	render: function() {
		var that = this;
		$(this.el).html(this.template({
			topic: this.topic
		}));
		setTimeout(function() {
			that.renderFacts();
		}, 0);
		return this;
	},
	
	renderFacts: function() {
		var view = new Protogap0.Views.FactsTopicInactive({
			attr: this.attr,
			topic: this.topic
		});
		$(this.el).find('#facts_number').html(view.render().el);
	}
});