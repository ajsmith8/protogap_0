Protogap0.Views.PagesMiniProfile = Backbone.View.extend({

	template: JST['pages/mini_profile'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.current_user = this.attr.users.where({id: this.attr.current_user.get('id')})[0];
		
		this.attr.users.on('change', this.render, this);
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template({
			current_user: this.current_user
		}));
		setTimeout(function() {
			self.renderLevel();
		}, 0);
		return this;
	},
	
	facebookLogin: function() {
		window.location = "http://localhost:3000/auth/facebook";
	},
	
	googleLogin: function() {
		window.location = "http://localhost:3000/auth/google";
	},
	
	twitterLogin: function() {
		window.location = "http://localhost:3000/auth/twitter";
	},
	
	renderLevel: function() {
		
	}
});