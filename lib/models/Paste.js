const { DataTypes, Model } = require("sequelize");

class Paste extends Model {}

module.exports = (sequelize) =>
  Paste.init(
    {
      key: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: DataTypes.DATEONLY,
      contentPath: DataTypes.STRING,
      syntax: DataTypes.STRING,
      metadata: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Paste",
      indexes: [
        {
          unique: true,
          fields: ['key']
        },
    ]
    }
  );
