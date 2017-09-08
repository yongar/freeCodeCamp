
var Bookview = Backbone.View.extend({

	tagName: 'li',
	template: _.template($('#book_template').html()),
	initialize: ;(function(){
		this.$el.html(this.template(this.modle.toJSON()));
		$
	})();
});
