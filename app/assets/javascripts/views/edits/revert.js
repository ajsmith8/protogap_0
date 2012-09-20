Protogap0.Views.EditsRevert = Backbone.View.extend({
	
	template: JST['edits/revert'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.edit = this.attr.edits.where({id: options.edit.get('id')})[0];
		this.fact = this.attr.facts.where({id: this.edit.get('fact_id')})[0];
		this.is_active = options.is_active;
		
		this.attr.facts.on('change', this.render, this);
	},
	
	render: function() {
		$(this.el).html(this.template({
			fact: this.fact,
			edit: this.edit,
			is_active: this.is_active
		}));
		return this;
	}
});