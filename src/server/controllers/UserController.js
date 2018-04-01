import {
    Router
} from 'express';
import bodyParser from 'body-parser';


//models
import User from '../models/User';


// const VerifyToken = require(__root + 'auth/VerifyToken');

const app = Router();


app.use(bodyParser.urlencoded({ extended: true }));


// CREATES A NEW USER
// app.post('/', function (req, res) {
//     User.create({
//             name : req.body.name,
//             email : req.body.email,
//             password : req.body.password
//         }, 
//         function (err, user) {
//             if (err) return res.status(500).send("There was a problem adding the information to the database.");
//             res.status(200).send(user);
//         });
// });

// RETURNS ALL THE USERS IN THE DATABASE
app.get('/', function (req, res) {
    try {
        User.find({}, function (err, users) {
            console.log('users', users)
            if (err) return res.status(500).send("There was a problem finding the users.");
            res.status(200).send(users);
        });
      }
      catch(error) {
          console.log('user error', error)
        return res.status(500).send("There was a problem finding the users.");
      }
    
});

// GETS A SINGLE USER FROM THE DATABASE
// app.get('/:id', function (req, res) {
//     User.findById(req.params.id, function (err, user) {
//         if (err) return res.status(500).send("There was a problem finding the user.");
//         if (!user) return res.status(404).send("No user found.");
//         res.status(200).send(user);
//     });
// });

// DELETES A USER FROM THE DATABASE
// app.delete('/:id', function (req, res) {
//     User.findByIdAndRemove(req.params.id, function (err, user) {
//         if (err) return res.status(500).send("There was a problem deleting the user.");
//         res.status(200).send("User: "+ user.name +" was deleted.");
//     });
// });

// UPDATES A SINGLE USER IN THE DATABASE
// Added VerifyToken middleware to make sure only an authenticated user can put to this route
// router.put('/:id', /* VerifyToken, */ function (req, res) {
//     User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
//         if (err) return res.status(500).send("There was a problem updating the user.");
//         res.status(200).send(user);
//     });
// });




export default app;
