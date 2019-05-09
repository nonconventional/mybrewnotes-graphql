const { DataSource } = require('apollo-datasource');
const Sequelize = require('sequelize');

class BrewsAPI extends DataSource {
  constructor() {
    super();
    this.store = createStore();
  }

  async getBrews() {
    return await this.store.brews.findAll();
  }

  async getBrewById({ id }) {
    console.log(id);
    return await this.store.brews.findOne({ where: { id } });
  }

  async createBrew({ name, description, batchSize }) {
    return await this.store.brews.create({ name, description, batchSize });
  }
};

const createStore = () => {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    storage: './app.db',
  });

  const CREATE_BREWS_QUERY = `CREATE TABLE IF NOT EXISTS brews(
    id INTEGER PRIMARY KEY,
    createdAt DATETIME,
    updatedAt DATETIME,
    name TEXT,
    description TEXT,
    batchSize TEXT
  )`;

  sequelize.query(CREATE_BREWS_QUERY);


  const brews = sequelize.define('brew', {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    batchSize: Sequelize.STRING,
  });

  return { brews };
};


module.exports = BrewsAPI