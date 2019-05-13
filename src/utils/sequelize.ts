import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  logging: false,
  storage: './app.db',
});

export default sequelize;