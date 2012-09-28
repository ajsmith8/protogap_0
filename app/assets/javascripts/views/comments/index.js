Protogap0.Views.CommentsIndex = Backbone.View.extend({
	
	template: JST['comments/index'],
	
	events: {
		'click #new_comment' : 'createComment',
		'submit #newcomment' : 'submitComment'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.fact = this.attr.facts.where({id: options.fact.get('id')})[0];
		this.comments = this.attr.comments.where({fact_id: this.fact.get('id'), ancestry: null});
		
		this.attr.comments.on('order', this.render, this);
	},
	
	render: function() {
		this.comments.sort(function(a, b) {
			return b.get('score') - a.get('score');
		});
		var self = this;
		
		$(this.el).html(this.template({fact: this.fact}));
		setTimeout(function() {
			for (i = 0; i < self.comments.length; i++) {
				self.appendComment(self.comments[i]);
			}
		}, 0);
		return this;
	},
	
	appendComment: function(comment) {
		var view = new Protogap0.Views.CommentsShow({
			attr: this.attr,
			comment: comment
		});
		$('#comments').append(view.render().el);
	},
	
	createComment: function() {
		$(this.el).find('#add_comment').html(JST['comments/create']);
	},
	
	submitComment: function(event) {
		var comment;
		event.preventDefault();
		if ($('#comment_content').val() && $('#comment_content').val() !== "") {
			comment = this.attr.comments.create({
				content: $('#comment_content').val(),
				user_id: this.attr.current_user.get('id'),
				fact_id: this.fact.get('id')
			});
			this.appendComment(comment);
		}
		$(this.el).find('#add_comment').html('<button id = "new_comment">New Comment</button>');
	}
});
