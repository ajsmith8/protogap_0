Protogap0.Collections.Edits = Backbone.Collection.extend({
	
	model: Protogap0.Models.Edit,
	url: 'edits',
	
	comparator: function(edit) {
		var date = new Date(edit.get('created_at'));
		return - date.getTime();
	}
});
