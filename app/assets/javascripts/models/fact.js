Protogap0.Models.Fact = Backbone.Model.extend({
	
	updateFromEdit: function(edit) {
		this.set({
			edit_id: edit.get('id'),
			title: edit.get('title'),
			description: edit.get('description'),
			category: edit.get('category'),
			has_quiz: edit.get('has_quiz'),
			question: edit.get('question'),
			correct: edit.get('correct'),
			wrong1: edit.get('wrong1'),
			wrong2: edit.get('wrong2'),
			wrong3: edit.get('wrong3')
		});
		this.save();
	}
});
