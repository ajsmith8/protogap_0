Protogap0.Views.FactsIndex = Backbone.View.extend({
	
	id: 'facts',
	
	events: {
		'click .fact' : 'activateFact',
		'click #upvote' : 'upvote',
		'click #downvote' : 'downvote'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.topic = options.topic;
		this.category = options.category;
		this.active = null;
		
		this.attr.facts.on('order', this.rearrange, this);
	},
	
	render: function() {
		var self = this;
		this.attr.facts.sort();
		if (this.category !== 'all') {
			this.facts = this.attr.facts.where({topic_id: this.topic.get('id'), category: this.category, is_approved: true});
		} else {
			this.facts = this.attr.facts.where({topic_id: this.topic.get('id'), is_approved: true});
		}
		
		
		setTimeout(function() {
			for (i = 0; i < self.facts.length; i++) {
				self.appendFact(self.facts[i]);
			}
		}, 0);
		return this;
	},
	
	appendFact: function(fact) {
		var view = new Protogap0.Views.FactsShow({
			attr: this.attr,
			fact: fact,
			facts: this.facts
		});
		$('#facts').append(view.render().el);
		if (this.active && fact.get('id') === this.active.get('id')) {
			this.renderActive($('#facts').find('#' + fact.get('id')));
		} else {
			this.renderInactive($('#facts').find('#' + fact.get('id')));
		}
	},
	
	activateFact: function(event) {
		if (this.checkConditions(event)) {
			return;
		}
		var elements, element;
		
		element = $(event.target).closest('.fact');
		elements = $('.fact').get();
		$('#facts').children().removeClass('above below');
		for (i = 0; i < elements.length; i++) {
			if ($(elements[i]).hasClass('active') || $(elements[i]).hasClass('edit') || $(elements[i]).hasClass('comment')) {
				if ($(elements[i]).hasClass('ignoreme')) {
					
				} else {
					this.checkInactive(elements[i]);
				}
			}
		}
		this.renderOffscreenActive(element);
	},
	
	checkConditions: function(event) {
		var condition1, condition2, condition3, condition4, condition5;
		condition1 = $(event.target).hasClass('editfact');
		condition2 = $(event.target).closest('.fact').hasClass('edit');
		condition3 = $(event.target).hasClass('vote');
		condition4 = $(event.target).hasClass('commenting');
		condition5 = $(event.target).closest('.fact').hasClass('comment');
		condition6 = $(event.target).closest('.fact').hasClass('active');
		
		if (condition1 || condition2 || condition3 || condition4 || condition5 || condition6) {
			return true;
		} else {
			return false;
		}
	},
	
	renderOffscreenActive: function(element) {
		var height, self = this;
		var fact_id = parseInt($(element).attr('id'));
		var view = new Protogap0.Views.FactsActive({
			fact: this.attr.facts.where({id: fact_id})[0],
			attr: this.attr
		});
		$('#offscreen').children().remove();
		$('#offscreen').html(view.render().el);
		setTimeout(function() {
			height = $('#offscreen').css('height');
			self.renderActive(element, height);
		}, 0);
	},
	
	renderActive: function(element, height) {
		var fact_id = parseInt($(element).attr('id'));
		var view = new Protogap0.Views.FactsActive({
			fact: this.attr.facts.where({id: fact_id})[0],
			attr: this.attr
		});
		var margin = '10px 0 10px 0';
		if ($(element).hasClass('top')) {
			margin = '0 0 10px 0';
		}
		$(element).css('height', '90px');
		$(element).children().remove();
		$(element).addClass('active');
		$(element).prev().addClass('above');
		$(element).next().addClass('below');
		$(element).html(view.render().el);
		setTimeout(function() {
			$(element).animate({
				height: height,
				margin: margin
			}, 400);
		}, 0);
	},
	
	checkInactive: function(element) {
		if ($(element).css('height') === '90px') {
			this.renderInactive(element);
		} else {
			this.renderAnimatedInactive(element);
		}
	},
		
	renderInactive: function(element) {
		if ($(element).hasClass('bottom')) {
			$(element).css('margin', '0 0 10px 0');
		}
		$(element).children().remove();
		$(element).removeClass('active');
		$(element).removeClass('edit');
		$(element).removeClass('comment');
		var view = new Protogap0.Views.FactsInactive({
			fact: this.attr.facts.where({id: parseInt($(element).attr('id'))})[0],
			attr: this.attr
		});
		$(element).html(view.render().el);
	},
	
	renderAnimatedInactive: function(element) {
		var self = this;
		var margin = '0';
		if ($(element).hasClass('bottom')) {
			margin = '0 0 10px 0';
		}
		$(element).animate({
			height: '90px',
			margin: margin
		}, 400);
		setTimeout(function() {
			$(element).children().remove();
			$(element).removeClass('active');
			$(element).removeClass('edit');
			$(element).removeClass('comment');
			var view = new Protogap0.Views.FactsInactive({
				fact: self.attr.facts.where({id: parseInt($(element).attr('id'))})[0],
				attr: self.attr
			});
			$(element).html(view.render().el);
		}, 350);
	},
	
	upvote: function(event) {
		var fact_id = parseInt($(event.target).closest('.fact').attr('id'));

		this.attr.votes.addOrUpdate(
			this.attr.facts.where({id: fact_id})[0],
			this.attr.users.where({id: this.attr.current_user.get('id')})[0],
			1
		);

		this.attr.facts.resetScores(this.attr.votes);
	},
	
	downvote: function(event) {
		var fact_id = parseInt($(event.target).closest('.fact').attr('id'));
		
		this.attr.votes.addOrUpdate(
			this.attr.facts.where({id: fact_id})[0],
			this.attr.users.where({id: this.attr.current_user.get('id')})[0],
			-1
		);
		
		this.attr.facts.resetScores(this.attr.votes);
	},
	
	rearrange: function() {
		var element, elements, facts, self = this;
		elements = $('.fact').get();
		
		for (i = 0; i < elements.length; i++) {
			if ($(elements[i]).hasClass('active')) {
				element = elements[i];
			}
		}
		$(this.el).children().remove();
		this.active = this.attr.facts.where({id: parseInt($(element).attr('id'))})[0];
		this.attr.facts.sort();
		if (this.category !== 'all') {
			facts = this.attr.facts.where({topic_id: this.topic.get('id'), category: this.category, is_approved: true});
		} else {
			facts = this.attr.facts.where({topic_id: this.topic.get('id'), is_approved: true});
		}
		
		for (i = 0; i < facts.length; i++) {
			self.appendFact(facts[i]);
		}

		return this;
	}
});
