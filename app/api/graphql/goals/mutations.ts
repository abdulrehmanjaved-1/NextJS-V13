export const mutations=`#graphql
type Mutation {
    addGoals(userId:ID!,myGoals:String,myLabel:String,myDate:String): Boolean
  }

`