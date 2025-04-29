import Flame from '../assets/flameStreak.png';

export default function Habit({handleCompletedDay, localClear, dayStreak, habitName}) {
    return (
        <div>
            <p>{habitName}</p>
            <p>{dayStreak}</p>
            <img src={Flame} alt="Flame vector for streak in habit" className='w-[5rem]'/>
            <button className='bg-white text-black' onClick={() =>  handleCompletedDay}>Zrobione</button>
            <button className='bg-white text-black' onClick={() =>  localClear}>Nie Zrobione</button>
        </div>
    )
}