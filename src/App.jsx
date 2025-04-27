import { useEffect, useState } from "react";

export default function App() {
  
  const [habitDay, setHabitDay] = useState(() => {
    const saved = localStorage.getItem("habitDays");
    return saved ? Number(saved) : 0;  
  });
  const lastUpdate = localStorage.getItem('lastUpdate');
  
  function complete() {
    setHabitDay(prevHabitDay => {
      const newHabitDay = prevHabitDay + 1;
      localStorage.setItem("habitDays", newHabitDay);
      localStorage.setItem('lastUpdate', Date.now());
      return newHabitDay;
    });
    console.log(habitDay)
    console.log(lastUpdate)
  }

  function remove() {
    localStorage.clear()
    setHabitDay(0)
    console.log(habitDay)
  }

  useEffect(() => {
      const interval = setInterval(() => {
      if (lastUpdate) {
        const now = Date.now();
        const diffInMs = now - Number(lastUpdate);
        const diffInHours = diffInMs / (1000 * 60 * 60); // milisekundy na godziny
      
        if (diffInHours > 24) {
          setHabitDay(0);
          localStorage.setItem('lastUpdate', Date.now());
          console.log("od nowa")
        }
      }
    }, 5000);
    console.log("od nowa")
    return () => clearInterval(interval)
  } , [])

  


  return (
    <main className="flex flex-col gap-6 justify-center items-center h-screen">
        <p className={`${habitDay >= 10 ? "bg-red-500" : ""}`}>{habitDay}</p>
        <button onClick={complete} className="bg-gray-400 cursor-pointer text-black p-2 rounded">Zrobione</button>
        <button onClick={remove} className="bg-red-600 cursor-pointer text-white p-2 rounded">Zrobione</button>
    </main>
  );
}