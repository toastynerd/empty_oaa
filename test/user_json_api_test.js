'use strict';
//jshint unused:false

var superagent = require('superagent');
var chai = require('chai'),
  expect = chai.expect,
  should = chai.should();
var app = require('../app').app;

describe('Users JSON api', function(){
  var id;

  it('get a collection', function(done){
    superagent.get("http://localhost:3000/api/v1/users").end(function(er, res) {
      expect(er).to.be.eql(null);

      done();
    });
  });

  it('should be able to create a user', function(done){
    superagent.post('http://localhost:3000/api/v1/users')
      .send({first_name: "Ford", last_name: "Prefect", email: "ford@theguide.com"})
      .end(function(err, res){
        expect(err).to.be.eql(null);
        expect(res.body.first_name).to.be.eql("Ford");

        id = res.body._id;
        done();
    });
  });
});





