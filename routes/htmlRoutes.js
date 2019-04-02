const router = require('express').Router();
const models = require('../models');

module.exports = (db) => {
  router.get('/register', (req, res) => {
    if (req.isAuthenticated()) {
      res.redirect('/profile');
    } else {
      res.render('register');
    }
  });

  router.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
      db.User.findOne({
        where: {
          id: req.session.passport.user.id
        }
      }).then(() => {
        const user = {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated()
        };
        // console.log(user);
        res.render('profile', user);
      });
    } else {
      res.redirect('/');
    }
  });

  router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('landing', user);
    } else {
      res.render('landing');
    }
  });

  router.get('/recipe/:id', (req, res) => {
    models.Recipe.findAll({
      where: {
        id: req.params.id
      }
    }).then((recipeInfo) => {
      var recipe = recipeInfo;
      models.Ingredient.findAll({
        where: {
          RecipeId: req.params.id
        }
      }).then((data) => {
        const obj = {
          recipes: recipe,
          ingredients: data
        };
        res.render('recipe', obj);
      });
    });
  });

  router.get('/createRecipe', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('createRecipe', user);
    } else {
      res.render('createRecipe');
    }
  });

  router.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('dashboard', user);
    } else {
      res.render('dashboard');
    }
  });

  router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('connect.sid', {
        path: '/'
      });
      res.redirect('/');
    });
  });

  router.post('/ginfo', (req, res) => {
    db.User.findOrCreate({
      where: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
      }
    }).then(result => {
      console.log(result);
      res.json(result);
    });
  });

  return router;
};
