define(
  [
  'marionette',
  'handlebars'
],
function(
  Marionette,
  Handlebars
){
  var SillyExercise = Marionette.ItemView.extend({

    template: Handlebars.compile(
      '<button id="pass" value="pass"><button id="fail" value="fail">'
    ),

    events: {
      'click button': 'onButtonClick'
    },

    onRender: function(){
      this.trigger('ready');
    },

    onButtonClick: function(e){
      var passFail = $(e.target).attr("id");
      this.model.set('result', passFail);
    }
  });

  return SillyExercise;
});
