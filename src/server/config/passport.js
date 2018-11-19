import mongoose from 'mongoose';
import passport from 'passport';
import LocalStrategy from 'passport-local';

import {
  getHashedPassword,
} from '../models/User';

const Users = mongoose.model('Users');

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]',
}, (userInputEmail, userInputPassword, done) => {
  Users.findOne({ email: userInputEmail })
    .then((user) => {
      if(!user || user.password !== getHashedPassword(userInputPassword)) {
        return done(null, false, { errors: { 'email or password': 'is invalid' } });
      }

      return done(null, user);
    }).catch(done);
}));