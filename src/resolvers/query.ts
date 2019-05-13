export default {
  Query: {
    brew: (root, { id }, { dataSources }) =>
      dataSources.brewsAPI.getBrewById({ id }),
    brews: (root, args, { dataSources }) => {
      return dataSources.brewsAPI.getBrews();
    },
  }
}