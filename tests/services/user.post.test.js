const supertest = require("supertest");
const assert = require('assert');
const app = require("../../index");
const elasticsearch = require('../../storage/elastic_client')
const agent = supertest(app)
describe("POST /user", function() {
  it("it should has status code 200", async() =>{
    await agent
      .post("/user")
      .send({
        username: 'test',
    password: '23423423423432',
    birth_year: 1985,
    email: 'test@test.com'
      })
      .expect(200)
      await new Promise((r)=>setTimeout(r, 3000))
      const timestamp = new Date(Date.now())
      let formatted_date = timestamp.getDate() + "-" + (timestamp.getMonth() + 1) + "-" + timestamp.getFullYear()
      const res = await elasticsearch.find({
        "match": {username: 'test'}
    }, formatted_date)

    console.log('res ', res);
  });
});