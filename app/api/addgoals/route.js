import Goals from "@/models/goals";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
    const { userId, myGoals, myLabel,myDate } = await request.json();
    console.log('Request Body:', userId);
    try {
        await connectToDB();
        const newGoals = new Goals({ creator:userId,goals:myGoals,date:myDate,label:myLabel});
        await newGoals.save();
        return new Response(JSON.stringify(newGoals), { status: 201 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to create new goals", { status: 500 });
    }
}