const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const User = require('../models/User');
const mongoose = require('mongoose');

chai.use(require('chai-http'));
const expect = chai.expect;

describe('Auth API', () => {
  before(async () => {
    // Connect to a test database
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/finora_test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  beforeEach(async () => {
    // Clear the users collection before each test
    await User.deleteMany({});
  });

  after(async () => {
    // Disconnect from the test database
    await mongoose.connection.close();
  });

  // Test the /register endpoint
  describe('POST /api/auth/register', () => {
    it('should register a new user', async () => {
      const res = await chai.request(app)
        .post('/api/auth/register')
        .send({
          name: 'Test User',
          email: 'test@example.com',
          phoneNumber: '1234567890',
          password: 'password123',
        });
      expect(res).to.have.status(201);
      expect(res.body).to.have.property('message').eql('User registered successfully');
      expect(res.body).to.have.property('token');
    });

    it('should not register a user with existing email', async () => {
      await new User({
        name: 'Existing User',
        email: 'test@example.com',
        phoneNumber: '1234567890',
        password: 'password123',
      }).save();

      const res = await chai.request(app)
        .post('/api/auth/register')
        .send({
          name: 'Another User',
          email: 'test@example.com',
          phoneNumber: '0987654321',
          password: 'password456',
        });
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('message').eql('Email already exists');
    });

    it('should return 400 if name, email or password are missing', async () => {
      const res = await chai.request(app)
        .post('/api/auth/register')
        .send({
          email: 'test@example.com',
          password: 'password123',
        });
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('message').eql('Name, email, and password are required');
    });
  });

  // Test the /login endpoint
  describe('POST /api/auth/login', () => {
    beforeEach(async () => {
      // Register a user for login tests
      await chai.request(app)
        .post('/api/auth/register')
        .send({
          name: 'Login User',
          email: 'login@example.com',
          phoneNumber: '1112223333',
          password: 'loginpassword',
        });
    });

    it('should log in an existing user', async () => {
      const res = await chai.request(app)
        .post('/api/auth/login')
        .send({
          email: 'login@example.com',
          password: 'loginpassword',
        });
      expect(res).to.have.status(200);
      expect(res.body).to.have.property('message').eql('Login successful');
      expect(res.body).to.have.property('token');
    });

    it('should not log in with invalid credentials', async () => {
      const res = await chai.request(app)
        .post('/api/auth/login')
        .send({
          email: 'login@example.com',
          password: 'wrongpassword',
        });
      expect(res).to.have.status(401);
      expect(res.body).to.have.property('message').eql('Invalid credentials');
    });

    it('should return 400 if email or password are missing', async () => {
      const res = await chai.request(app)
        .post('/api/auth/login')
        .send({
          email: 'login@example.com',
        });
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('message').eql('Email and password are required');
    });
  });

  // Test the /forgot-password endpoint
  describe('POST /api/auth/forgot-password', () => {
    beforeEach(async () => {
      // Register a user for forgot password tests
      await chai.request(app)
        .post('/api/auth/register')
        .send({
          name: 'Forgot User',
          email: 'forgot@example.com',
          phoneNumber: '4445556666',
          password: 'forgotpassword',
        });
    });

    it('should send a password reset link', async () => {
      const res = await chai.request(app)
        .post('/api/auth/forgot-password')
        .send({
          email: 'forgot@example.com',
        });
      expect(res).to.have.status(200);
      expect(res.body).to.have.property('message').eql('Password reset link sent to your email');
    });

    it('should return 404 for a non-existent user', async () => {
      const res = await chai.request(app)
        .post('/api/auth/forgot-password')
        .send({
          email: 'nonexistent@example.com',
        });
      expect(res).to.have.status(404);
      expect(res.body).to.have.property('message').eql('User not found');
    });

    it('should return 400 if email is missing', async () => {
      const res = await chai.request(app)
        .post('/api/auth/forgot-password')
        .send({});
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('message').eql('Email is required');
    });
  });

  // Test the /reset-password endpoint
  describe('POST /api/auth/reset-password', () => {
    let resetToken;
    beforeEach(async () => {
      // Register a user and request a reset token
      await chai.request(app)
        .post('/api/auth/register')
        .send({
          name: 'Reset User',
          email: 'reset@example.com',
          phoneNumber: '7778889999',
          password: 'resetpassword',
        });

      const forgotRes = await chai.request(app)
        .post('/api/auth/forgot-password')
        .send({
          email: 'reset@example.com',
        });
      const user = await User.findOne({ email: 'reset@example.com' });
      resetToken = user.resetToken;
    });

    it('should reset the user password with a valid token', async () => {
      const res = await chai.request(app)
        .post('/api/auth/reset-password')
        .send({
          token: resetToken,
          password: 'newpassword123',
        });
      expect(res).to.have.status(200);
      expect(res.body).to.have.property('message').eql('Password reset successfully');

      // Try logging in with the new password
      const loginRes = await chai.request(app)
        .post('/api/auth/login')
        .send({
          email: 'reset@example.com',
          password: 'newpassword123',
        });
      expect(loginRes).to.have.status(200);
      expect(loginRes.body).to.have.property('token');
    });

    it('should not reset password with an invalid token', async () => {
      const res = await chai.request(app)
        .post('/api/auth/reset-password')
        .send({
          token: 'invalidtoken',
          password: 'newpassword123',
        });
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('message').eql('Invalid or expired token');
    });

    it('should not reset password with an expired token', async () => {
      // Manually expire the token
      await User.findOneAndUpdate({ email: 'reset@example.com' }, { resetTokenExpiry: Date.now() - 1000 });

      const res = await chai.request(app)
        .post('/api/auth/reset-password')
        .send({
          token: resetToken,
          password: 'newpassword123',
        });
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('message').eql('Invalid or expired token');
    });

    it('should return 400 if token or new password are missing', async () => {
      const res = await chai.request(app)
        .post('/api/auth/reset-password')
        .send({
          token: resetToken,
        });
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('message').eql('Token and new password are required');
    });
  });
});