// src/graphql/mutations/goals.js
import { gql } from "@apollo/client";

export const ADD_GOALS = gql`
  mutation AddGoals($userId: ID!, $myGoals: String, $myLabel: String, $myDate: String) {
    addGoals(userId: $userId, myGoals: $myGoals, myLabel: $myLabel, myDate: $myDate)
  }
`;

// Define other mutations here as needed
