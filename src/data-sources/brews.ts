import { DataSource } from 'apollo-datasource';
import { BuildOptions, DataTypes, Model } from 'sequelize';

import sequelize from '../utils/sequelize';

interface BrewsAPI {
  store: {
    brews: BrewStatic
  },
}

interface Brew extends Model {
  readonly id: number;
  name: string;
  description: string;
  batchSize: string;
}

type BrewStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): Brew;
}

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
  const CREATE_BREWS_QUERY = `CREATE TABLE IF NOT EXISTS brews(
    id INTEGER PRIMARY KEY,
    createdAt DATETIME,
    updatedAt DATETIME,
    name TEXT,
    description TEXT,
    batchSize TEXT
  )`;

  sequelize.query(CREATE_BREWS_QUERY);


  const brews = <BrewStatic>sequelize.define('brew', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    batchSize: DataTypes.STRING,
  });

  return { brews };
};


export default BrewsAPI;