var MarketingForm = (function() {
  window.globalForms = {};



  // PUBLIC API 
  var Form = function(options) {

  };




  // Private API //


  Form.prototype.extend = function(target, object) {
    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
        target[prop] = object[prop];
      }
    }
    return target;
  };

  



  return Form;
}());