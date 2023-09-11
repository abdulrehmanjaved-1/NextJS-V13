// types/goals.js
import { gql } from "graphql-tag";

const goalsType = gql`
  type Goals {
    creator: ID!
    goals: String!
    date: String!
    label: String!
  }

  type Query {
    getGoals: String
  }

  type Mutation {
    addGoals(userId: ID!, myGoals: String, myLabel: String, myDate: String): Boolean
  }
`;

export default goalsType;
