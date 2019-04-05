// const router = require('express').Router();
const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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

  router.get('/api/recipe/:id', (req, res) => {
    db.Recipe.findOne({ where: { id: req.params.id } }).then((response) => {
      res.json(response);
    }).catch((err) => {
      res.json(err);
    });
  });

  // GET route for searched data:
  router.get('/api/search', (req, res) => {
    console.log(req.query);
    if (req.query.recipe) {
      let search = { where: { name: { [Op.like]: `%${req.query.recipe}%` } } };
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
    ingredients = JSON.parse(ingredients);
    db.Recipe.create(req.body)
      .then((response) => {
        const recipeId = response.id;
        ingredients.forEach(element => {
          element.RecipeId = recipeId;
        });
        ingredients.forEach(element => {
          db.Ingredient.create(element).then(result => {}).catch(err => res.json(err));
        });
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // Post route for adding ingredients
  router.get('/api/ingredient', (req, res) => {
    console.log(req.query);
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
