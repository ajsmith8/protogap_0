Protogap0.Views.TopicsActive = Backbone.View.extend({
	
	template: JST['topics/active'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr
		this.topic = this.attr.topics.where({id: options.topic.get('id')})[0];
	},
	
	render: function() {
		var that = this;
		$(this.el).html(this.template({
			topic: this.topic
		}));
		setTimeout(function() {
			that.renderTier();
			that.renderFacts();
		}, 0);
		return this;
	},
	
	renderTier: function() {
		var view = new Protogap0.Views.TiersShow({
			topic: this.topic
		});
		$('#tier').html(view.render().el);
	},
	
	renderFacts: function() {
		var view = new Protogap0.Views.FactsTopicActive({
			attr: this.attr,
			topic: this.topic
		});
		$(this.el).find('#facts_number').html(view.render().el);
	}
});