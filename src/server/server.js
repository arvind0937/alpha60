import path from 'path'
import express from 'express'
import mongoose from 'mongoose'
import session from 'express-session';
import bodyParser from 'body-parser';
import errorhandler from 'errorhandler'

import apiRoutes from './apiRoutes'

import db from './db'

import './config/passport';

// Configure mongoose's promise to global promise
mongoose.promise = global.Promise

const app = express(),
  DIST_DIR = path.resolve(__dirname, '..', 'public'),
  BUNDLE_DIR = path.resolve(__dirname, '..', 'bundles'),
  IMG_DIR = path.resolve(__dirname, '..', 'src/client/img'),
  HTML_FILE = path.resolve(DIST_DIR),
  isDevelopment = process.env.NODE_ENV !== 'production',
  host = isDevelopment ? 'localhost' : 'app',
  DEFAULT_PORT = 3000

app.set('port', process.env.PORT || DEFAULT_PORT)

if (isDevelopment) {
  app.use(errorhandler())
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(HTML_FILE))
app.use('/bundles', express.static(BUNDLE_DIR))
app.use('/img', express.static(IMG_DIR))
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

app.use('/api/', apiRoutes)

app.get('*', (req, res) => res.sendFile(HTML_FILE))

app.use('*', function (req, res, next) {
  if (res.accessToken) {
    next()
  } else {
    res.redirect('/login')
  }
})

const port = app.get('port')
app.listen(port, () => {
  console.log(`listening to http://${host}:${port}`)
})

export default app
