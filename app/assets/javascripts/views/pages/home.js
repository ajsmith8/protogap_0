Protogap0.Views.PagesHome = Backbone.View.extend({

	template: JST['pages/home'],
	
	events: {
		'click #img1' : 'image1',
		'click #img2' : 'image2',
		'click #img3' : 'image3',
		'click #img4' : 'image4',
		'click #img5' : 'image5',
		'click #img6' : 'image6'
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template({
			
		}));
		setTimeout(function() {
			self.slider();
		}, 0);
		return this;
	},
	
	slider: function() {
		var self = this;
		$('#slider').cycle('stop');
		$('#nav').children().remove();
		$('#slider').cycle({
			fx: 'scrollLeft',
			pager: '#nav',
			easeIn: 'easeInExpo',
			easeOut: 'easeInExpo',
		});
	},
	
	image1: function() {
		$('#slider').cycle('stop');
		Backbone.history.navigate('about', true);
	},
	
	image2: function() {
		$('#slider').cycle('stop');
		Backbone.history.navigate('tutorial', true);
	},
	
	image3: function() {
		$('#slider').cycle('stop');
		Backbone.history.navigate('topics', true);
	},
	
	image4: function() {
		$('#slider').cycle('stop');
		Backbone.history.navigate('leaderboard', true);
	},
	
	image5: function() {
		$('#slider').cycle('stop');
		Backbone.history.navigate('team', true);
	},
	
	image6: function() {
		alert("aren't these colors awesome?!");
	}
});