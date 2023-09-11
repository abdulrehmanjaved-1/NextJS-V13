import {connectToDB} from "../../../../utils/database"
import Goals from "../../../../models/goals"
const queries={
    getGoals: async()=>{
        return 'done hy boss'
    }
};
const mutations={
    addGoals: async(_,{userId,myGoals,myLabel,myDate}:{userId:Number;myGoals:string;myLabel:string;myDate:string})=>{
        try {
            await connectToDB();
            const newGoals = new Goals({ creator:userId,goals:myGoals,date:myDate,label:myLabel});
            await newGoals.save();
            return true;
        } catch (error) {
return false        }
    }
}

export const resolvers={queries,mutations}