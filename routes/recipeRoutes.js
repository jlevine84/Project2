// const router = require('express').Router();
const db = require('../models');

module.exports = (router) => {
  // GET route for all Recipe data:
  router.get('/api/recipe', (req, res) => {
    db.Recipe.findAll({})
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // GET route for searched data:
  router.get('/api/recipe/search?', (req, res) => {
    if (req.query.recipe) {
      let search = { where: { name: req.query.recipe } };
      db.Recipe.findAll(search)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    }
    if (req.query.ingredient) {
      const query = {};
      if (req.query.RecipeId) {
        query.RecipeId = req.query.RecipeId;
      }

      db.Ingredient.findAll({
        where: query,
        include: [db.Recipe] })
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    }
  });

  // POST route for creating new Recipe data:
  router.post('/api/recipe', (req, res) => {
    let ingredients = req.body.ingredients;
    db.Recipe.create(req.body)
      .then((response) => {
        res.json(response);
        let recipeId = response.id;
        ingredients.forEach(element => {
          element.RecipeId = recipeId;
        });
        ingredients.forEach(element => {
          db.Ingredient.create(element).then(result => {
            res.json(result);
          }).catch(err => res.json(err));
        });
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // Post route for adding ingredients
  router.post('/api/ingredient', (req, res) => {
    db.Ingredient.create(req.body)
      .then((response) => {
        res.json(response);
      }).catch((err) => {
        res.json(err);
      });
  });

  // PUT route for updating Recipe data:
  router.put('/api/recipe/:id', (req, res) => {
    const recipeToUpdate = { where: { id: req.params.id } };
    db.Recipe.update(req.body, recipeToUpdate)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // DELETE route for destroying Recipe data:
  router.delete('/api/recipe/:id', (req, res) => {
    const deleteRecipe = { where: { id: req.params.id } };
    db.Recipe.destroy(deleteRecipe)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
