module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    isFavorite: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  });

  // Associations: Users and Recipes
  Favorite.associate = (models) => {
    Favorite.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Favorite.associate = (models) => {
    Favorite.belongsTo(models.Recipe, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Favorite;
};
