Protogap0.Routers.Router = Backbone.Router.extend({
	
	routes: {
		'' 		: 'pagesHome',
		'about' : 'pagesAbout',
		
		'facts:id' 			: 'factsIndex',
		'facts:id/intro' 	: 'factsIntro',
		'facts:id/pros' 	: 'factsPros',
		'facts:id/cons' 	: 'factsCons',
		'facts:id/quiz'		: 'factsQuiz'
	},
	
	initialize: function(options) {
		this.users = options.users;
		this.topics = options.topics;
		this.facts = options.facts;
		this.edits = options.edits;
		this.sources = options.sources;
		this.tasks = options.tasks;
		this.votes = options.votes;
		this.levels = options.levels;
		this.tiers = options.tiers;
		this.user_tiers = options.user_tiers;
		this.comments = options.comments;
		this.scores = options.scores;
		this.current_user = this.users.where({id: options.user_id})[0];

		this.attr = {
			current_user: this.current_user,
			users: this.users,
			topics: this.topics,
			facts: this.facts,
			edits: this.edits,
			sources: this.sources,
			tasks: this.tasks,
			votes: this.votes,
			levels: this.levels,
			tiers: this.tiers,
			user_tiers: this.user_tiers,
			comments: this.comments,
			scores: this.scores
		};
		
		this.pagesHeader();
		this.topicsIndex();
		this.pagesMiniProfile();
	},
	
	signedInUser: function(user) {
		return !user.get('is_temp_user');
	},
	
	pagesHome: function() {
		var view = new Protogap0.Views.PagesHome({
			attr: this.attr
		});
		$('#right').html(view.render().el);
	},
	
	pagesAbout: function() {
		var view = new Protogap0.Views.PagesAbout({
			attr: this.attr
		});
		$('#right').html(view.render().el);
	},
	
	pagesMiniProfile: function() {
		var view = new Protogap0.Views.PagesMiniProfile({
			attr: this.attr
		});
		$('#left_top').html(view.render().el);
	},
	
	pagesHeader: function() {
		var view = new Protogap0.Views.PagesHeader({
			attr: this.attr
		});
		$('#header').html(view.render().el);
	},
	
	topicsIndex: function() {
		var view = new Protogap0.Views.TopicsIndex({
			attr: this.attr
		});
		$('#left_bottom').html(view.render().el);
	},
	
	factsIndex: function(id) {
		var view = new Protogap0.Views.FactsIndex({
			attr: this.attr,
			facts: this.facts.where({topic_id: parseInt(id), is_approved: true})
		});
		$('#right').html(view.render().el);
	},
	
	factsIntro: function(id) {
		var view = new Protogap0.Views.FactsIndex({
			attr: this.attr,
			facts: this.facts.where({topic_id: parseInt(id), category: 'intro', is_approved: true})
		});
		$('#right').html(view.render().el);
	},
	
	factsPros: function(id) {
		var view = new Protogap0.Views.FactsIndex({
			attr: this.attr,
			facts: this.facts.where({topic_id: parseInt(id), category: 'pro', is_approved: true})
		});
		$('#right').html(view.render().el);
	},
	
	factsCons: function(id) {
		var view = new Protogap0.Views.FactsIndex({
			attr: this.attr,
			facts: this.facts.where({topic_id: parseInt(id), category: 'con', is_approved: true})
		});
		$('#right').html(view.render().el);
	},
	
	factsQuiz: function(id) {
		
	}
});
