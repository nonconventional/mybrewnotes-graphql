import { gql } from "apollo-server";

export default gql`
  type Query {
    brew(id: ID): Brew!
    brews: [Brew]!
  }
  type Mutation {
    createBrew(name: String, description: String, batchSize: String): Brew
  }
  type Brew {
    id: ID
    name: String
    description: String
    batchSize: String
  }
`;
