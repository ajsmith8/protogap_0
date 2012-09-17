Protogap0.Views.TopicsShow = Backbone.View.extend({
	
	initialize: function(options) {
		this.attr = options.attr;
		this.topic = options.topic;
	},
		
	render: function() {
		$(this.el).attr('id', this.topic.get('id'));
		$(this.el).addClass('topicpanel border');
		return this;
	}
});