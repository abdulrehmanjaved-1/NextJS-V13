import { gql } from "@apollo/client";

const ADD_GOALS = gql`
    mutation AddGoals($userId: ID!, $myGoals: String!, $myLabel: String!, $myDate: String!) {
    addGoals(userId: $userId, myGoals: $myGoals, myLabel: $myLabel, myDate: $myDate) {
    }
  }  
`;

export { ADD_GOALS };

