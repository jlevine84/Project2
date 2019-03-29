module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    material: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

    // Associations: Recipes
  Ingredient.associate = (models) => {
    Ingredient.belongsTo(models.Recipe, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Ingredient;
};
