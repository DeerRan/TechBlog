const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Defines the session/cookie to use for checking if a user is logged in or not.
const sess = {
  secret: 'Secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Enables the use of helpers
const hbs = exphbs.create({ helpers });

// Defining template engine (What drives the templates in, i.e. Handlebars in this case).
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Defines what files are publicly accessible and allows the server to find and serve them.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    sequelize.sync({ force: false });
});