Protogap0.Views.TopicsShow = Backbone.View.extend({
	
	initialize: function(options) {
		this.attr = options.attr;
		this.topic = options.topic;
		this.topics = _.toArray(this.attr.topics);
	},
		
	render: function() {
		$(this.el).attr('id', this.topic.get('id'));
		$(this.el).addClass('topic panel');
		if (this.topic.get('id') === this.topics[0].get('id')) {
			$(this.el).addClass('top');
		}
		if (this.topic.get('id') === this.topics[this.topics.length - 1].get('id')) {
			$(this.el).addClass('bottom');
		}
		return this;
	}
});