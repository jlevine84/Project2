const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

module.exports = (passport, db) => {
  const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')();

  //* Authentication
  router.post('/register', AuthController.register);
  router.post('/login', AuthController.login);
  router.get('/logout', AuthController.logout);
  router.put('/user/:id', ensureAuthenticated, AuthController.updateUser);
  router.delete('/user/:id', ensureAuthenticated, AuthController.deleteUser);
  router.post('/user/confirm', AuthController.confirmAuth);

  // TODO: Add HTTP status codes to if/else res. Add CRUD for Ingredients and Favorites.

  //! GET Route for all application data:
  // TODO: Need to add some sort of admin authentication for this GET route:
  router.get('/data/', ensureAuthenticated, AppController.getData, (req, res) => {
    if (req.isAuthenticated()) {
      const getAllDatabaseInfo = req.params;
      db.findAll(getAllDatabaseInfo)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      res.status(401).json({
        errorMessage: 'You must have administrator status to submit this request.'
      });
    }
  });

  //! User CRUD below (need to review with team then complete/update):
  // GET route for all User data:
  // TODO: Need to possibly add some sort of admin authentication for this GET route:
  router.get('/data/user/', ensureAuthenticated, AppController.getData, (req, res) => {
    if (req.isAuthenticated()) {
      const getAllUsers = req.params.user;
      db.User.findAll(getAllUsers)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      res.status(401).json({
        errorMessage: 'You must have administrator status to submit this request.'
      });
    }
  });
  // GET route for specific User data:
  // TODO: Need to possibly add some sort of admin authentication for this GET route:
  router.get('/data/user/:id', ensureAuthenticated, AppController.getData, (req, res) => {
    if (req.isAuthenticated()) {
      const getSpecificUser = { where: { id: req.params.user.id } };
      db.User.findOne(getSpecificUser)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      res.status(401).json({
        errorMessage: 'You must have administrator status to submit this request.'
      });
    }
  });
  // POST route for creating new User data:
  // TODO: Need to possibly add some sort of admin authentication for this GET route:
  router.post('/data/user/', ensureAuthenticated, AppController.getData, (req, res) => {
    if (req.isAuthenticated()) {
      const postNewUser = {
        firstName: req.body.user.firstName,
        lastName: req.body.user.lastName,
        email: req.body.user.email,
        password: req.body.user.password,
        isAdmin: req.body.user.isAdmin,
        prefersMetric: req.body.user.prefersMetric,
        aboutMeSection: req.body.user.aboutMeSection
      };
      db.User.create(postNewUser)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      res.status(401).json({
        errorMessage: 'You must have administrator status to submit this request.'
      });
    }
  });
  // DELETE route for destroying User data:
  // TODO: Need to possibly add some sort of admin authentication for this GET route:
  router.delete('/data/user/:id', ensureAuthenticated, AppController.getData, (req, res) => {
    if (req.isAuthenticated()) {
      const deleteUser = { where: { id: req.params.user.id } };
      db.User.destroy(deleteUser)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      res.status(401).json({
        errorMessage: 'You must have administrator status to submit this request.'
      });
    }
  });
  // PUT route for updating User data:
  // TODO: Need to possibly add some sort of admin authentication for this GET route:
  router.put('/data/user/', ensureAuthenticated, AppController.getData, (req, res) => {
    if (req.isAuthenticated()) {
      const userToUpdate = { where: { id: req.body.user.id } };
      const updatedUserInfo = {
        firstname: req.body.user.firstName,
        lastName: req.body.user.lastName,
        email: req.body.user.email,
        password: req.body.user.password,
        isAdmin: req.body.user.isAdmin,
        prefersMetric: req.body.user.prefersMetric,
        aboutMeSection: req.body.user.aboutMeSection
      };
      db.User.update(updatedUserInfo, userToUpdate)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      res.status(401).json({
        errorMessage: 'You must have administrator status to submit this request.'
      });
    }
  });

  //! Recipe CRUD below (need to review with team then complete/update):
  //! May need to add auto-increment ID to recipes so same-name recipes aren't affected!
  // GET route for all Recipe data:
  router.get('/data/recipe/', ensureAuthenticated, AppController.getData, (req, res) => {
    if (req.isAuthenticated()) {
      const getAllRecipes = req.params.recipe;
      db.Recipe.findAll(getAllRecipes)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      res.status(401).json({
        errorMessage: 'Please log in to submit this request.'
      });
    }
  });
  // GET route for specific Recipe data:
  router.get('/data/recipe/:name', ensureAuthenticated, AppController.getData, (req, res) => {
    if (req.isAuthenticated()) {
      const getSpecificRecipe = { where: { id: req.params.recipe.name } };
      db.Recipe.findOne(getSpecificRecipe)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      res.status(401).json({
        errorMessage: 'Please log in to submit this request.'
      });
    }
  });
  // POST route for creating new Recipe data:
  router.post('/data/recipe/', ensureAuthenticated, AppController.getData, (req, res) => {
    if (req.isAuthenticated()) {
      const postNewRecipe = {
        name: req.body.recipe.name,
        servingSize: req.body.recipe.servingSize,
        instructions: req.body.recipe.instructions,
        isPublic: req.body.recipe.isPublic,
        tags: req.body.recipe.tags,
        mediaLink: req.body.recipe.mediaLink,
        summarySection: req.body.recipe.summarySection
      };
      db.Recipe.create(postNewRecipe)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      res.status(401).json({
        errorMessage: 'Please log in to submit this request.'
      });
    }
  });
  // DELETE route for destroying Recipe data:
  router.delete('/data/recipe/:name', ensureAuthenticated, AppController.getData, (req, res) => {
    if (req.isAuthenticated()) {
      const deleteRecipe = { where: { id: req.params.recipe.name } };
      db.Recipe.destroy(deleteRecipe)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      res.status(401).json({
        errorMessage: 'Please log in to submit this request.'
      });
    }
  });
  // PUT route for updating Recipe data:
  router.put('/data/recipe/', ensureAuthenticated, AppController.getData, (req, res) => {
    if (req.isAuthenticated()) {
      const recipeToUpdate = { where: { id: req.body.recipe.name } };
      db.Recipe.update(recipeToUpdate)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      res.status(401).json({
        errorMessage: 'Please log in to submit this request.'
      });
    }
  });

  //! Comment CRUD below (need to review with team then complete/update):
  // GET route for all Comment data:
  router.get('/data/comment/', ensureAuthenticated, AppController.getData, (req, res) => {
    if (req.isAuthenticated()) {
      const getAllComments = req.params.comment;
      db.Comment.findAll(getAllComments)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      res.status(401).json({
        errorMessage: 'Please log in to submit this request.'
      });
    }
  });
  // GET route for specific Comment data:
  router.get('/data/comment/:id', ensureAuthenticated, AppController.getData, (req, res) => {
    if (req.isAuthenticated()) {
      const getSpecificComment = { where: { id: req.params.comment.id } };
      db.Comment.findOne(getSpecificComment)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      res.status(401).json({
        errorMessage: 'Please log in to submit this request.'
      });
    }
  });
  // POST route for creating new Comment data:
  router.post('/data/comment/', ensureAuthenticated, AppController.getData, (req, res) => {
    if (req.isAuthenticated()) {
      const postNewComment = { body: req.body.comment.body };
      db.Comment.create(postNewComment)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      res.status(401).json({
        errorMessage: 'Please log in to submit this request.'
      });
    }
  });
  // DELETE route for destroying Comment data:
  router.delete('/data/comment/:id', ensureAuthenticated, AppController.getData, (req, res) => {
    if (req.isAuthenticated()) {
      const deleteComment = { where: { id: req.params.comment.id } };
      db.Comment.destroy(deleteComment)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      res.status(401).json({
        errorMessage: 'Please log in to submit this request.'
      });
    }
  });
  // PUT route for updating Comment data:
  router.put('/data/comment/', ensureAuthenticated, AppController.getData, (req, res) => {
    if (req.isAuthenticated()) {
      const commentToUpdate = { where: { id: req.body.comment.id } };
      const updatedCommentInfo = { body: req.body.comment.body };
      db.Comment.update(updatedCommentInfo, commentToUpdate)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      res.status(401).json({
        errorMessage: 'Please log in to submit this request.'
      });
    }
  });

  return router;
};
