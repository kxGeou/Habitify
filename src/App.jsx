import Habit from "./components/Habit";
import Timer from "./components/Timer";

export default function App() {


  return (
    <main className="flex flex-col gap-6 justify-center items-center h-screen">
        <Habit></Habit>
        <Timer></Timer>
    </main>
  );
}