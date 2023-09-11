"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const QNASection = (props) => {
  const { user } = props;

  const [goals, setGoals] = useState([{ id: 0, value: "" }]);
  const [label, setLabel] = useState("");
  const [date, setDate] = useState('');

  const router=useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/addgoals", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify({
          userId: user.id,
          myGoals: goals,
          myLabel: label,
          myDate: date,
        }),
      });router
      if (response.ok) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddGoal = () => {
    const newGoals = [...goals, { id: goals.length, value: "" }];
    setGoals(newGoals);
  };

  const handleGoalChange = (id, value) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === id ? { ...goal, value } : goal
    );
    setGoals(updatedGoals);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Set Your Goals</h1>
      <form onSubmit={handleSubmit}>
        {goals.map((goal) => (
          <div key={goal.id} className="mb-4">
            <label
              htmlFor={`goal-${goal.id}`}
              className="block text-sm font-medium text-gray-700"
            >
              Goal {goal.id + 1}
            </label>
            <input
              type="text"
              id={`goal-${goal.id}`}
              name={`goal-${goal.id}`}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              required
              value={goal.value}
              onChange={(e) => handleGoalChange(goal.id, e.target.value)}
            />
          </div>
        ))}
        <div className="mt-4">
          <button
            type="button"
            onClick={handleAddGoal}
            className="mb-4 px-3 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Add More
          </button>
        </div>
        <div className="mb-4">
          <label
            htmlFor="label"
            className="block text-sm font-medium text-gray-700"
          >
            Label
          </label>
          <input
            onChange={(event) => setLabel(event.target.value)}
            type="text"
            id="label"
            value={label}
            name="label"
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            onChange={(event) => setDate(event.target.value)}
            type="date"
            id="date"
            name="date"
            value={date}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            required
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default QNASection;
