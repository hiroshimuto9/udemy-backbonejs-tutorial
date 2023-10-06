var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
  render: function () {
    var template = _.template($("#songTemplates").html());
    var html = template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});


var song = new Song({ title: "Blue in Green" });

var songView = new SongView({ el: "#container", model: song });
songView.render();