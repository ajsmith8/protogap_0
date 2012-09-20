Protogap0.Views.EditsActive = Backbone.View.extend({
	
	template: JST['edits/active'],
	
	events: {
		'click #revertedit' : 'revertEdit'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.edit = this.attr.edits.where({id: options.edit.get('id')})[0];
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template({
			edit: this.edit
		}));
		setTimeout(function() {
			self.renderRevert();
		}, 0);
		return this;
	},
	
	renderRevert: function() {
		var view = new Protogap0.Views.EditsRevert({
			attr: this.attr,
			edit: this.edit,
			is_active: true
		});
		$(this.el).find('#revert').html(view.render().el);
	},
	
	revertEdit: function(event) {
		var fact = this.attr.facts.where({id: this.edit.get('fact_id')})[0];
		fact.updateFromEdit(this.edit);
	}
});