import Flame from '../assets/flameStreak.png';
import { useEffect, useState } from "react";

export default function Habit() {
     
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
        const diffInHours = diffInMs / (1000 * 60 * 60); 
      
        if (diffInMs > 1) {
          setHabitDay(0);
          localStorage.setItem('lastUpdate', Date.now());
          console.log("od nowa")
        }
      }
    }, 5000);
    return () => clearInterval(interval)
  } , [])

  

   
   
    return (
        <div>
            <p>QWE</p>
            <p>{habitDay}</p>
            <img src={Flame} alt="Flame vector for streak in habit" className='w-[5rem]'/>
            <button className='bg-white text-black' onClick={complete}>Zrobione</button>
            <button className='bg-white text-black' onClick={remove}>Nie Zrobione</button>
        </div>
    )
}