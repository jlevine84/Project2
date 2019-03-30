const bcrypt = require('bcrypt');

module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: {
          args: true,
          msg: 'User already exists'
        }
      },
      password: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      prefersMetric: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      aboutMeSection: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [1, 255]
        }
      }
    },
    {
      timestamps: true,
      hooks: {
        beforeValidate: function (user) {
          if (user.changed('password')) {
            return bcrypt.hash(user.password, 10).then((password) => {
              user.password = password;
            });
          }
        }
      }
    }
  );

  // This will check if an unhashed password can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Compares passwords
  User.prototype.comparePasswords = function (password, callback) {
    bcrypt.compare(password, this.password, (error, isMatch) => {
      if (error) {
        return callback(error);
      }
      return callback(null, isMatch);
    });
  };

  User.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
  };

  // Associations: Recipes and Comments
  User.associate = (models) => {
    User.hasMany(models.Recipe, {
      onDelete: 'cascade'
    });
  };

  User.associate = (models) => {
    User.hasMany(models.Comment, {
      onDelete: 'cascade'
    });
  };

  return User;
};
