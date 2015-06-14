var MarketingForm = (function() {
  window.globalForms = {};



  // PUBLIC API 
  var Form = function(options) {
  
  }




  // Private API //
  Form.prototype.extend = function(obj) {
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        this[i] = obj[i];
      }
    }
  };




  return Form;
}());