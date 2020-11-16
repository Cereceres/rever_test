const supertest = require("supertest");
const assert = require('assert');
const app = require("../../index");
const agent = supertest(app)
describe("POST /user", function() {
  it("it should has status code 200", function(done) {
    agent
      .post("/user")
      .send({
        username: 'test',

    password: '23423423423432',


    birth_year: 1985,

    email: 'test@test.com'

      })
      .expect(200)
      .end(function(err, res){
          console.log('err ', err);
          console.log('res ', res.body);
        if (err) return done(err);
        done();
      });
  });
});