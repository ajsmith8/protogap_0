window.Protogap0 = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	
	init: function(data) {
		this.current_user = new Protogap0.Models.User(data.current_user);
		this.users = new Protogap0.Collections.Users(data.users);
		this.topics = new Protogap0.Collections.Topics(data.topics);
		this.facts = new Protogap0.Collections.Facts(data.facts);
		this.edits = new Protogap0.Collections.Edits(data.edits);
		this.sources = new Protogap0.Collections.Sources(data.sources);
		this.tasks = new Protogap0.Collections.Tasks(data.tasks);
		this.votes = new Protogap0.Collections.Votes(data.votes);
		this.levels = new Protogap0.Collections.Levels(data.levels);
		this.tiers = new Protogap0.Collections.Tiers(data.tiers);
		this.user_tiers = new Protogap0.Collections.UserTiers(data.user_tiers);
		this.comments = new Protogap0.Collections.Comments(data.comments);
		this.scores = new Protogap0.Collections.Scores(data.scores);

		new Protogap0.Routers.Router({
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
		});
		Backbone.history.start();
	}
};