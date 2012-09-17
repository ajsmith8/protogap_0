Protogap0.Views.FactsIndex = Backbone.View.extend({
	
	id: 'facts',
	
	events: {
		'click .factpanel' : 'activateFact'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.facts = options.facts;
	},
	
	render: function() {
		var that = this;
		var facts = this.facts;
		
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
		this.renderInactive($('#facts').find('#' + fact.get('id')));
	},
	
	activateFact: function(event) {
		var elements, element;
		
		element = $(event.target).closest('.factpanel');
		elements = $('.factpanel').get();
		for (i = 0; i < elements.length; i++) {
			if ($(elements[i]).hasClass('active')) {
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
		var view = new Protogap0.Views.FactsInactive({
			fact: this.attr.facts.where({id: parseInt($(element).attr('id'))})[0],
			attr: this.attr
		});
		$(element).html(view.render().el);
	}
});
