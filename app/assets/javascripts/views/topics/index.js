Protogap0.Views.TopicsIndex = Backbone.View.extend({

	id: 'topics',
	
	events: {
		'click .topicpanel' : 'activateTopic'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.topics = options.attr.topics;
	},
	
	render: function() {
		var that = this;
		setTimeout(function() {
			that.topics.each(function(t) {
				that.appendTopic(t);
			});
		}, 0);
		return this;
	},
	
	appendTopic: function(topic) {
		var view = new Protogap0.Views.TopicsShow({
			attr: this.attr,
			topic: topic
		});
		$('#topics').append(view.render().el);
		this.renderInactive($('#topics').find('#' + topic.get('id')));
	},
	
	activateTopic: function(event) {
		var elements, element;
		
		element = $(event.target).closest('.topicpanel');
		elements = $('.topicpanel').get();
		for (i = 0; i < elements.length; i++) {
			if ($(elements[i]).hasClass('active')) {
				this.renderInactive(elements[i]);
			}
		}
		this.renderActive(element);
	},
	
	renderActive: function(element) {
		var topic_id = parseInt($(element).attr('id'));
		var view = new Protogap0.Views.TopicsActive({
			attr: this.attr,
			topic: this.topics.where({id: topic_id})[0]
		});
		
		$(element).children().remove();
		$(element).addClass('active');
		$(element).html(view.render().el);
		
		Backbone.history.navigate('facts' + topic_id + '/intro', true);
	},
		
	renderInactive: function(element) {
		$(element).children().remove();
		$(element).removeClass('active');
		var view = new Protogap0.Views.TopicsInactive({
			attr: this.attr,
			topic: this.topics.where({id: parseInt($(element).attr('id'))})[0]
		});
		$(element).html(view.render().el);
	}
});