//= require chai
//= require ideas
var assert = chai.assert;

describe('idea functions', function() {
  
  it("createCard is a fucntion", function() {
    var idea = { 
      id: 0, 
      title: "title",
      body: "body",
      quality: 0
    };
    assert.ok(createCard(idea), "createCard is a function");
  });
  
  it("createCard2 is a fucntion", function() {
    var idea = { 
      id: 0, 
      title: "title",
      body: "body",
      quality: 0
    };
    assert.ok(createCard2(idea), "createCard is a function");
  });
    
});

describe('idea ajax', function(){
  beforeEach(function () {
    sinon.spy($, 'ajax');
    this.requests = [];
    this.xhr = sinon.useFakeXMLHttpRequest();
    this.xhr.onCreate = function (req) { this.requests.push(req); }.bind(this);
  });
  
  afterEach(function () {
    $.ajax.restore();
    this.xhr.restore();
  });
  
  it('deleteIdea makes an AJAX call to the server', function () {
    deleteIdea();
    assert($.ajax.calledOnce, 'We hit JQuery\'s AJAX method');
    assert.strictEqual(this.requests.length, 1, 'We made one AJAX request');
  });
  
  it('down makes an AJAX call to the server', function () {
    down();
    assert($.ajax.calledOnce, 'We hit JQuery\'s AJAX method');
    assert.strictEqual(this.requests.length, 1, 'We made one AJAX request');
  });
  
  it('up makes an AJAX call to the server', function () {
    up();
    assert($.ajax.calledOnce, 'We hit JQuery\'s AJAX method');
    assert.strictEqual(this.requests.length, 1, 'We made one AJAX request');
  });
});