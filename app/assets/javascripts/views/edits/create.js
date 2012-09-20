Protogap0.Views.EditsCreate = Backbone.View.extend({
	
	template: JST['edits/create'],
	
	events:{
		'click #cancel' : 'renderActive',
		'submit #edit_fact' : 'createEdit',
		'click #history' : 'editsIndex'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.fact = this.attr.facts.where({id: options.fact.get('id')})[0];
		this.sources = this.attr.sources.where({fact_id: this.fact.get('id')});
	},
	
	render: function() {
		$(this.el).html(this.template({
			fact: this.fact,
			sources: this.sources
		}));
		return this;
	},
	
	renderActive: function() {
		var element = $(this.el).closest('.factpanel');
		var view = new Protogap0.Views.FactsActive({
			fact: this.fact,
			attr: this.attr
		});
		
		$(element).children().remove();
		$(element).removeClass('edit');
		$(element).html(view.render().el);
	},
	
	createEdit: function(event) {
		event.preventDefault();
		var category, urls, has_quiz;
		
		if($(this.el).find('#pro').attr('checked')) {
			category = 'pro';
		} else if ($(this.el).find('#con').attr('checked')) {
			category = 'con';
		} else {
			category = 'intro';
		}
		
		urls = this.getUrls($('.editsource').get());
		if ($('#question').val() && $('#question').val() !== "") {
			has_quiz = true;
		} else {
			has_quiz = false;
		}
		this.fact.updateFromEdit(this.attr.edits.create({
			user_id: this.attr.current_user.get('id'),
			topic_id: this.fact.get('topic_id'),
			fact_id: this.fact.get('id'),
			title: $('#title').val(),
			description: $('#description').val(),
			image: this.fact.get('image'),
			category: category,
			urls: urls,
			has_quiz: has_quiz,
			question: $('#question').val(),
			correct: $('#correct').val(),
			wrong1: $('#wrong1').val(),
			wrong2: $('#wrong2').val(),
			wrong3: $('#wrong3').val()
		}, {async: false}));
		this.renderActive();
	},
	
	getUrls: function(sources) {
		var urls, source;
		
		for (i = 0; i < sources.length; i++) {
			if (this.attr.sources.where({id: parseInt($(sources[i]).attr('id'))})[0]) {
				source = this.attr.sources.where({id: parseInt($(sources[i]).attr('id'))})[0];
				if ($(sources[i]).val() === "") {
					source.destroy();
				} else {
					source.set({url: $(sources[i]).val()});
					source.save();
				}
			} else {
				this.attr.sources.create({fact_id: this.fact.get('id'), url: $(sources[i]).val()});
			}
			
			if (i === 0) {
				urls = $(sources[i]).val();
			} else {
				urls = " " + $(sources[i]).val();
			}
		}
		
		return urls;
	},
	
	editsIndex: function() {
		var element = $(this.el).closest('.factpanel');
		var view = new Protogap0.Views.EditsIndex({
			fact: this.fact,
			attr: this.attr
		});
		$(element).children().remove();
		$(element).html(view.render().el);
	}
});