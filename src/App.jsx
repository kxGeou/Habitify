import { useState } from "react";

export default function App() {
  
  const [habitDay, setHabitDay] = useState(() => {
    const saved = localStorage.getItem("habitDays");
    return saved ? Number(saved) : 0;  
  });
  
  function complete() {
    setHabitDay(prevHabitDay => {
      const newHabitDay = prevHabitDay + 1;
      localStorage.setItem("habitDays", newHabitDay);
      return newHabitDay;
    });

    console.log(habitDay)
  }

  function remove() {
    localStorage.clear()
    setHabitDay(0)
    console.log(habitDay)
  }

  return (
    <main className="flex flex-col gap-6 justify-center items-center h-screen">
        <p className={`${habitDay >= 10 ? "bg-red-500" : ""}`}>{habitDay}</p>
        <button onClick={complete} className="bg-gray-400 cursor-pointer text-black p-2 rounded">Zrobione</button>
        <button onClick={remove} className="bg-red-600 cursor-pointer text-white p-2 rounded">Zrobione</button>
    </main>
  );
}