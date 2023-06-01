const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
// Import app
const app = require('../server'); 


chai.use(chaiHttp);

describe('API', () => {
    function randomInt(low, high) {
        return Math.floor(Math.random() * (high - low) + low)
    }

    describe ('/hello', () => {
        it('should return Hello world', (done) => {
            chai.request(app)
                .get('/api/hello')
                .end((err, res) => {
                    if (err) done(err);
                    expect(res).to.have.status(200);
                    expect(res.text).to.equals('Hello world');
                    done();
                });
        });
    });
    describe ('/createUser', () => {
        it('should create a user', (done) => {
            const user = {
                name: 'Test',
                email: 'Test@asd.com',
                direction: 'Test',
                identification: randomInt(1000000000, 9999999999),
                birthdate: '1990-01-01'
            };
            chai.request(app)
                .post('/api/createUser')
                .send(user)
                .end((err, res) => {
                    if (err) {
                        console.log(err);
                        done(err)
                    }
                    expect(res).to.have.status(200);
                    expect(res.body.status).to.equals('User saved');
                    done();
                });
        });
    });
    describe ('/getUsers', () => {
        it('should get all users', (done) => {
            chai.request(app)
                .get('/api/getUsers')
                .end((err, res) => {
                    if (err) done(err);
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    done();
                });
        });
    });
});


// Run the tests

// Run the tests with the command NODE_ENV=test npx mocha --exit. You should see the following output:

//   API
//     ✓ should return Hello world
//     ✓ should create a user
//     ✓ should get all users

//   3 passing (1s)
// If you want to see the code of this example, you can find it in this repository.

// Conclusion
// In this tutorial, we learned how to create a REST API with Node.js, Express, and MongoDB. We also learned how to test the API with Mocha and Chai. We created a simple API that allows us to create users and get all users. We also learned how to create a simple test for the API.

// If you want to learn more about Node.js, Express, and MongoDB, you can read these articles:

// How to create a REST API with Node.js
// How to create a REST API with Express
// How to create a REST API with MongoDB
// How to connect to MongoDB with Node.js
// How to connect to MongoDB with Mongoose
// How to create a REST API with Node.js, Express, and MongoDB




