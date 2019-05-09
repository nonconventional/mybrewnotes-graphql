module.exports = {
  Mutation: {
    createBrew: async (root, { name, description, batchSize }, { dataSources }) => {
      return await dataSources.brewsAPI.createBrew({ name, description, batchSize });
    },
  },
};