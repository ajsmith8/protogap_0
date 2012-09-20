Protogap0.Views.FactsActive = Backbone.View.extend({
	
	template: JST['facts/active'],
	
	events: {
		'click .editfact' : 'editsCreate',
		'click #comment_number' : 'commentsIndex'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.fact = this.fact = this.attr.facts.where({id: options.fact.get('id')})[0];
	},
	
	render: function() {
		var that = this;
		$(this.el).html(this.template({
			fact: this.fact
		}));
		setTimeout(function() {
			that.renderComments();
			that.renderVotes();
			that.renderSources();
		}, 0);
		return this;
	},
	
	renderComments: function() {
		var view = new Protogap0.Views.CommentsActive({
			attr: this.attr,
			fact: this.fact
		});
		$(this.el).find('#comments_number').html(view.render().el);
	},
	
	renderVotes: function() {
		var view = new Protogap0.Views.VotesActive({
			attr: this.attr,
			fact: this.fact
		});
		$(this.el).find('#votes_number').html(view.render().el);
	},
	
	renderSources: function() {
		var view = new Protogap0.Views.SourcesIndex({
			attr: this.attr,
			fact: this.fact
		});
		$(this.el).find('#sources').html(view.render().el);
	},
	
	editsCreate: function(event) {
		var element = $(event.target).closest('.factpanel');
		var view = new Protogap0.Views.EditsCreate({
			attr: this.attr,
			fact: this.attr.facts.where({id: parseInt($(element).attr('id'))})[0]
		});
		$(element).children().remove();
		$(element).addClass('edit');
		$(element).html(view.render().el);
	},
	
	commentsIndex: function(event) {
		var element = $(event.target).closest('.factpanel');
		var view = new Protogap0.Views.CommentsIndex({
			attr: this.attr,
			fact: this.attr.facts.where({id: parseInt($(element).attr('id'))})[0]
		});
		$(element).children().remove();
		$(element).addClass('comment');
		$(element).html(view.render().el);
	}
});