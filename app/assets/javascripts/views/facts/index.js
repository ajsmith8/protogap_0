Protogap0.Views.FactsIndex = Backbone.View.extend({
	
	id: 'facts',
	
	events: {
		'click .factpanel' : 'activateFact',
		'click #upvote' : 'upvote',
		'click #downvote' : 'downvote'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.topic = options.topic;
		this.category = options.category;
		
		this.attr.facts.on('order', this.render, this);
	},
	
	render: function() {
		this.attr.facts.sort();
		var that = this;
		var facts;
		if (this.category !== 'all') {
			facts = this.attr.facts.where({topic_id: this.topic.get('id'), category: this.category, is_approved: true});
		} else {
			facts = this.attr.facts.where({topic_id: this.topic.get('id'), is_approved: true});
		}
		
		
		setTimeout(function() {
			for (i = 0; i < facts.length; i++) {
				that.appendFact(facts[i]);
			}
		}, 0);
		return this;
	},
	
	appendFact: function(fact) {
		var view = new Protogap0.Views.FactsShow({
			attr: this.attr,
			fact: fact
		});
		$('#facts').append(view.render().el);
		if ($('#facts').find('#' + fact.get('id')).hasClass('active')) {
			this.renderActive($('#facts').find('#' + fact.get('id')));
		} else {
			this.renderInactive($('#facts').find('#' + fact.get('id')));
		}
	},
	
	activateFact: function(event) {
		if ($(event.target).hasClass('editfact') || $(event.target).closest('.factpanel').hasClass('edit') || $(event.target).hasClass('vote')) {
			return;
		}
		var elements, element;
		
		element = $(event.target).closest('.factpanel');
		elements = $('.factpanel').get();
		for (i = 0; i < elements.length; i++) {
			if ($(elements[i]).hasClass('active') || $(elements[i]).hasClass('edit')) {
				this.renderInactive(elements[i]);
			}
		}
		this.renderActive(element);
	},
	
	renderActive: function(element) {
		var fact_id = parseInt($(element).attr('id'));
		var view = new Protogap0.Views.FactsActive({
			fact: this.attr.facts.where({id: fact_id})[0],
			attr: this.attr
		});
		
		$(element).children().remove();
		$(element).addClass('active');
		$(element).html(view.render().el);
	},
		
	renderInactive: function(element) {
		$(element).children().remove();
		$(element).removeClass('active');
		$(element).removeClass('edit');
		var view = new Protogap0.Views.FactsInactive({
			fact: this.attr.facts.where({id: parseInt($(element).attr('id'))})[0],
			attr: this.attr
		});
		$(element).html(view.render().el);
	},
	
	upvote: function(event) {
		var fact_id = parseInt($(event.target).closest('.factpanel').attr('id'));

		this.attr.votes.addOrUpdate(
			this.attr.facts.where({id: fact_id})[0],
			this.attr.users.where({id: this.attr.current_user.get('id')})[0],
			1
		);

		this.attr.facts.resetScores(this.attr.votes);
	},
	
	downvote: function(event) {
		var fact_id = parseInt($(event.target).closest('.factpanel').attr('id'));
		
		this.attr.votes.addOrUpdate(
			this.attr.facts.where({id: fact_id})[0],
			this.attr.users.where({id: this.attr.current_user.get('id')})[0],
			-1
		);
		
		this.attr.facts.resetScores(this.attr.votes);
	}
});
