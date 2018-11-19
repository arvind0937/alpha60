import mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const salt = crypto.randomBytes(128).toString('base64');

export const getHashedPassword = password => crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');

const UsersSchema  = mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

UsersSchema.methods.setPassword = function(password) {
    this.hash = getHashedPassword(password);
    this.password = getHashedPassword(password);
  };
  
  UsersSchema.methods.validatePassword = function(password) {
    return this.hash === getHashedPassword(password);
  };
  
  UsersSchema.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
  
    return jwt.sign({
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
  }
  
  UsersSchema.methods.toAuthJSON = function() {
    return {
      _id: this._id,
      email: this.email,
      token: this.generateJWT(),
    };
  };

export default mongoose.model('Users', UsersSchema);
