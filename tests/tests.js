// tests.js
describe('MarketingForm', function(){
  describe('#new', function(){
    it('create a global object storing all the form information', function(){
       var marketingForm = new MarketingForm();
       var globalMarket = window.globalForms;
       chai.expect(globalMarket).to.exist;
    });

    it('should create a new property in the global object as the form name', function(){
       var marketingForm = new MarketingForm();
       var globalMarket = window.globalForms;
       chai.expect(globalMarket).to.exist;
    });
  });

  describe('#extend', function(){
    it('extends configuration options passed in', function(){
       var marketingForm = new MarketingForm({testMode: true});
       chai.expect(marketingForm.extend).to.be.a('function');
    });
  });
});