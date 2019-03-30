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
    },
    isPublic: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mediaLink: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summarySection: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 500]
      }
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
