define(
  [
  'silly/SillyExercise',
  'backbone',
  'jquery'
],
function(
  SillyExercise,
  Backbone,
  $
){
  describe('SillyExercise', function(){

    var model;
    var view;


    var generateExercise =  function(){
      model = new Backbone.Model();
      view = new SillyExercise({
        model: model
      });
      view.render();
    };

    afterEach(function(){
      if (view){
        view.remove();
      }
    });

    it('should be defined', function(){
      expect(SillyExercise).toBeDefined();
    });

    it('should render correctly', function(){
      generateExercise();
      view.render();
      expect(view.$el.find('#pass').length).toEqual(1);
      expect(view.$el.find('#fail').length).toEqual(1);
    });

    it('should send ready event', function(){
      generateExercise();
      var spy = jasmine.createSpy('readySpy');
      view.on('ready', function(){
        spy();
      });
      view.render();
      expect(spy).toHaveBeenCalled();
    });

    it('should set result to pass if pass button is clicked', function(){
      generateExercise();
      view.render();
      view.$el.find('#pass').click();
      expect(model.get('result')).toEqual('pass');
    });

    it('should set result to fail if fail button is clicked', function(){
      generateExercise();
      view.render();
      view.$el.find('#fail').click();
      expect(model.get('result')).toEqual('fail');
    });

  });
});
