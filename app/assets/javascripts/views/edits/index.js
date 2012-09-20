Protogap0.Views.EditsIndex = Backbone.View.extend({

	template: JST['edits/index'],
	id: 'edits',
	
	events: {
		'click .editpanel' : 'activateEdit',
		'click #back' : 'renderCreate'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.fact = this.attr.facts.where({id: options.fact.get('id')})[0];
		this.edits = this.attr.edits.where({fact_id: this.fact.get('id')});
	},
	
	render: function() {
		var that = this;
		var edits = this.edits;
		
		$(this.el).html(this.template());
		setTimeout(function() {
			for (i = 0; i < edits.length; i++) {
				that.appendEdit(edits[i]);
			}
		}, 0);
		return this;
	},
	
	appendEdit: function(edit) {
		var view = new Protogap0.Views.EditsShow({
			attr: this.attr,
			edit: edit
		});
		$('#edits').append(view.render().el);
		this.renderInactive($('#edits').find('#' + edit.get('id')));
	},
	
	activateEdit: function(event) {
		if ($(event.target).hasClass('revertedit')) {
			return;
		}
		var elements, element;
		
		element = $(event.target).closest('.editpanel');
		elements = $('.editpanel').get();
		for (i = 0; i < elements.length; i++) {
			if ($(elements[i]).hasClass('active')) {
				this.renderInactive(elements[i]);
			}
		}
		this.renderActive(element);
	},
	
	renderActive: function(element) {
		var edit_id = parseInt($(element).attr('id'));
		var view = new Protogap0.Views.EditsActive({
			edit: this.attr.edits.where({id: edit_id})[0],
			attr: this.attr
		});
		
		$(element).children().remove();
		$(element).addClass('active');
		$(element).html(view.render().el);
	},
		
	renderInactive: function(element) {
		$(element).children().remove();
		$(element).removeClass('active');
		var view = new Protogap0.Views.EditsInactive({
			edit: this.attr.edits.where({id: parseInt($(element).attr('id'))})[0],
			attr: this.attr
		});
		$(element).html(view.render().el);
	},
	
	renderCreate: function() {
		var element = $(this.el).closest('.factpanel');
		var view = new Protogap0.Views.EditsCreate({
			fact: this.fact,
			attr: this.attr
		});
		
		$(element).children().remove();
		$(element).html(view.render().el);
	},
});
