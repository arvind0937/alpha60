import path from "path";
import express from "express";

import apiRoutes from './apiRoutes';

import db from './db';

const app           = express(),
      DIST_DIR      = path.resolve(__dirname, '..', 'public'),
      BUNDLE_DIR      = path.resolve(__dirname, '..', 'bundles'),
      HTML_FILE     = path.resolve(DIST_DIR, 'index.html'),
      isDevelopment = process.env.NODE_ENV !== 'production',
      host = isDevelopment ? 'localhost': 'app',
      DEFAULT_PORT  = 3000;

app.set('port', process.env.PORT || DEFAULT_PORT);

app.use(express.static(DIST_DIR));
app.use("/bundles", express.static(BUNDLE_DIR));
// app.use('*', function (req, res, next) {
//       console.log('log server');
//    if (res.accessToken){
//       next();
//    } else {
//       res.redirect('/login');
//    }

// });

app.use('/api/', apiRoutes);

app.get('*', (req, res) => res.sendFile(HTML_FILE));

const port  = app.get('port');
app.listen(port,  () => {
      console.log(`listening to http://${host}:${port}`);
});

export default app;
