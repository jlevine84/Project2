module.exports = (sequelize, DataTypes) => {
  // Create Table for Recipes
  let Recipe = sequelize.define('Recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    servingSize: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  // Associations: Ingredients and Comments
  Recipe.associate = (models) => {
    Recipe.hasMany(models.Ingredient, {
      onDelete: 'cascade'
    });
  };

  Recipe.associate = (models) => {
    Recipe.hasMany(models.Comment, {
      onDelete: 'cascade'
    });
  };

  return Recipe;
};
