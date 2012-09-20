Protogap0.Views.QuizzesAnswers = Backbone.View.extend({

	template: JST['quizzes/answers'],
	
	events: {
		'click .answer' : 'setQuizTask'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.quiz = this.attr.facts.where({id: options.quiz.get('id')})[0];
	},
	
	render: function() {
		$(this.el).html(this.template({
			answers: this.getAnswers(this.quiz)
		}));
		return this;
	},
	
	getAnswers: function(quiz) {
		var answers = [];
		
		answers.push(quiz.get('correct'));
		answers.push(quiz.get('wrong1'));
		if (quiz.get('wrong2') && quiz.get('wrong2') !== "") {
			answers.push(quiz.get('wrong2'));
		}
		if (quiz.get('wrong3') && quiz.get('wrong3') !== "") {
			answers.push(quiz.get('wrong3'));
		}
		
		this.answers = _.shuffle(answers);
		return this.answers;
	},
	
	setQuizTask: function(event) {
		var answer;
		
		if (this.quiz.get('correct') === $(event.target).attr('id')) {
			answer = 'correct';
		}
		if (this.quiz.get('wrong1') === $(event.target).attr('id')) {
			answer = 'wrong1';
		}
		if (this.quiz.get('wrong2') === $(event.target).attr('id')) {
			answer = 'wrong2';
		}
		if (this.quiz.get('wrong3') === $(event.target).attr('id')) {
			answer = 'wrong3';
		}
		
		this.attr.tasks.create({
			user_id: this.attr.current_user.get('id'),
			fact_id: this.quiz.get('id'),
			is_quiz: true,
			answer: answer,
			xp: 0
		});
	}
});