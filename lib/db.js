const { Sequelize } = require("sequelize");

const { DATA_PATH } = require("./const");
const { logger } = require("./logger");

async function connect() {
    const sequelize = new Sequelize({
      dialect: "sqlite",
      storage: `${DATA_PATH}/db.sqlite`,
      logging: msg => logger.info(msg),
    });
    
    try {
      await sequelize.authenticate();
      logger.info("Connection has been established successfully.");
    } catch (error) {
      logger.error(error);
    }

    return sequelize
}

module.exports = {
  connect,
};
