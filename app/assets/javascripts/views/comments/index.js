Protogap0.Views.CommentsIndex = Backbone.View.extend({
	
	template: JST['comments/index'],
	id: 'comments',
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.fact = this.attr.facts.where({id: options.fact.get('id')})[0];
		this.comments = this.attr.comments.where({fact_id: this.fact.get('id')});
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template());
		setTimeout(function() {
			for (i = 0; i < self.comments.length; i++) {
				self.appendComment(self.comments[i]);
			}
		});
		return this;
	},
	
	appendComment: function(comment) {
		var view = new Protogap0.Views.CommentsShow({
			attr: this.attr,
			comment: comment
		});
		$('comments').append(view.render().el);
		this.renderInactive($('#comments').find('#' + comment.get('id')));
	},
	
	activateComment: function(event) {
		if ($(event.target).hasClass('revertedit')) {
			return;
		}
		var elements, element;
		
		element = $(event.target).closest('.commentpanel');
		elements = $('.editpanel').get();
		for (i = 0; i < elements.length; i++) {
			if ($(elements[i]).hasClass('active')) {
				this.renderInactive(elements[i]);
			}
		}
		this.renderActive(element);
	},
	
	renderInactive: function(element) {
		$(element).children().remove();
		$(element).removeClass('active');
		var view = new Protogap0.Views.CommentsInactive({
			comment: this.attr.comments.where({id: parseInt($(element).attr('id'))})[0],
			attr: this.attr
		});
		$(element).html(view.render().el);
	},
	
	renderActive: function(element) {
		var view = new Protogap0.Views.CommentsActive({
			edit: this.attr.edits.where({id: parseInt($(element).attr('id'))})[0],
			attr: this.attr
		});
		
		$(element).children().remove();
		$(element).addClass('active');
		$(element).html(view.render().el);
	}
});
