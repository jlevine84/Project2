module.exports = (sequelize, DataTypes) => {
  let Session = sequelize.define('Session', {
    sid: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    userId: DataTypes.STRING,
    expires: DataTypes.DATE,
    data: DataTypes.TEXT
  });

  return Session;
};
