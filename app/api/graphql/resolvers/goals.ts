// resolvers/goals.js

import Goals from "../../../../models/goals";
import { connectToDB } from "../../../../utils/database";

const goalsResolvers = {
  Query: {
    getGoals: async () => {
      return 'done hy boss';
    },
  },
  Mutation: {
    addGoals: async (_, { userId, myGoals, myLabel, myDate }) => {
      await connectToDB();
      const newGoals = new Goals({
        creator: userId,
        goals: myGoals,
        date: myDate,
        label: myLabel,
      });
      await newGoals.save();
      return true;
    },
  },
};

export default goalsResolvers;
