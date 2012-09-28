Protogap0.Views.PagesTutorial = Backbone.View.extend({

	template: JST['pages/tutorial'],
	
	events: {
		'click #img1' : 'image1',
		'click #img2' : 'image2',
		'click #img3' : 'image3',
		'click #img4' : 'image4'
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
		$('#slider').cycle({
			fx: 'fade',
			pager: '#nav',
			timeout: 0
		});
	},
	
	image1: function() {

	},
	
	image2: function() {

	},
	
	image3: function() {

	},
	
	image4: function() {

	}
});