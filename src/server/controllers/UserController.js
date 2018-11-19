import {
    Router
} from 'express';
import passport from 'passport';

//models
import Users from '../models/User';

import auth from './auth';


// const VerifyToken = require(__root + 'auth/VerifyToken');

const router = Router();


///POST new user route (optional, everyone has access)
router.post('/', auth.optional, (req, res, next) => {
    const { body: { user } } = req;
  console.log(req.body);
    if(!user.email) {
      return res.status(422).json({
        errors: {
          email: 'is required',
        },
      });
    }
  
    if(!user.password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }
  
    const finalUser = new Users(user);
  
    finalUser.setPassword(user.password);
    console.log(finalUser);
    return finalUser.save()
      .then(() => res.json({ user: finalUser.toAuthJSON() }));
  });
  
  //POST login route (optional, everyone has access)
  router.post('/login', auth.optional, (req, res, next) => {
    const { body: { user } } = req;
    if(!user.email) {
      return res.status(422).json({
        errors: {
          email: 'is required',
        },
      });
    }
  
    if(!user.password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }
  
    return passport.authenticate('local', { session: true, failureFlash: true }, (err, passportUser, info) => {
      if(err) {
        console.log(err);
        return next(err);
      }
  
      if(passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();
  
        return res.json({ user: user.toAuthJSON() });
      }
  

      return res.status(400).json({
        errors: {
          code: '111',
          info,
        },
      });
    })(req, res, next);
  });
  
  //GET current route (required, only authenticated users have access)
  router.get('/current', auth.required, (req, res, next) => {
    const { payload: { id } } = req;
  
    return Users.findById(id)
      .then((user) => {
        if(!user) {
          return res.sendStatus(400);
        }
  
        return res.json({ user: user.toAuthJSON() });
      });
  });




export default router;
