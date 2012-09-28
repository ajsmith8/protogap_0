Protogap0.Views.QuizzesIndex = Backbone.View.extend({
	
	id: 'quizzes',
	
	events: {
		'click .quiz' : 'activateQuiz'
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
				that.appendQuiz(facts[i]);
			}
		}, 0);
		return this;
	},
	
	appendQuiz: function(quiz) {
		var view = new Protogap0.Views.QuizzesShow({
			attr: this.attr,
			quiz: quiz,
			quizzes: this.facts
		});
		$('#quizzes').append(view.render().el);
		this.renderInactive($('#quizzes').find('#' + quiz.get('id')));
	},
	
	activateQuiz: function(event) {
		var elements, element;
		var tasks = this.attr.tasks;
		var user_id = this.attr.current_user.get('id');
		
		element = $(event.target).closest('.quiz');
		elements = $('.quiz').get();
		
		for (i = 0; i < elements.length; i++) {
			if ($(elements[i]).hasClass('active')) {
				this.renderInactive(elements[i]);
			}
		}
		this.renderActive(element);
	},
	
	renderActive: function(element) {
		var quiz_id = parseInt($(element).attr('id'));
		var view = new Protogap0.Views.QuizzesActive({
			quiz: this.attr.facts.where({id: quiz_id})[0],
			attr: this.attr
		});
		
		$(element).children().remove();
		$(element).addClass('active');
		$(element).prev().addClass('above');
		$(element).next().addClass('below');
		$(element).html(view.render().el);
	},
		
	renderInactive: function(element) {
		$(element).children().remove();
		$(element).removeClass('active');
		var view = new Protogap0.Views.QuizzesInactive({
			quiz: this.attr.facts.where({id: parseInt($(element).attr('id'))})[0],
			attr: this.attr
		});
		$(element).html(view.render().el);
	}
});