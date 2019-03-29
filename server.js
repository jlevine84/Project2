require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const passport = require('passport');
const moment = require('moment');
const helmet = require('helmet');
const PORT = process.argv[2] || process.env.PORT || 3333;
const app = express();
const db = require('./models');

// // Google Authentication
// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client(CLIENT_ID);
// async function verify () {
//   const ticket = await client.verifyIdToken({
//     idToken: token,
//     audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
//     // Or, if multiple clients access the backend:
//     // [CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//   });
//   const payload = ticket.getPayload();
//   const userid = payload['sub'];
//   // If request specified a G Suite domain:
//   // const domain = payload['hd'];
// }
// verify().catch(console.error);

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(morgan('dev')); // Hook up the HTTP logger
app.use(express.static('public'));

require('./config/passport')(db, app, passport); // pass passport for configuration

// Define our routes
app.use(require('./routes/htmlRoutes')(db));
app.use('/api', require('./routes/apiRoutes')(passport, db));

// Secure express app
app.use(helmet.hsts({
  maxAge: moment.duration(1, 'years').asMilliseconds()
}));

// catch 404 and forward to error handler
if (app.get('env') !== 'development') {
  app.use((req, res, next) => {
    let err = new Error('Not Found: ' + req.url);
    err.status = 404;
    next(err);
  });
}

db.sequelize.sync({ force: process.env.FORCE_SYNC === 'true' }).then(() => {
  if (process.env.FORCE_SYNC === 'true') {
    require('./db/seed')(db);
  };

  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
});
