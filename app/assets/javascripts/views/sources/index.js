Protogap0.Views.SourcesIndex = Backbone.View.extend({

	template: JST['sources/index'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.fact = this.attr.facts.where({id: options.fact.get('id')})[0];
		
		this.attr.sources.on('change', this.render, this);
	},
	
	render: function() {
		$(this.el).html(this.template({
			sources: this.attr.sources.where({fact_id: this.fact.get('id')})
		}));
		return this;
	}
});
