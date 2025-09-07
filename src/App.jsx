import { useEffect, useState } from "react";
import Tasks from "./Tasks";
import AddTasks from "./AddTasks";

function App() {
  const [tasks, setask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  function OnclickTask(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setask(newTasks);
  }
  function AddTask(titulo, descripcion) {
    const newTask = {
      id: crypto.randomUUID(),
      title: titulo,
      description: descripcion,
      isComplete: false,
    };
    setask([...tasks, newTask]);
  }
  function OnclickDestroy(taskId) {
    // Eliminar la tarea con el ID proporcionado
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setask(newTasks);
  }
  useEffect(() => {
    /*async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setask(data);
    }*/
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-orange-300  bg-orange-600 flex justify-center text-center p-6">
      <div className=" w-[500px] space-y-4 p-6 border-red-900 border-2 bg-orange-100 rounded-lg shadow">
        <h1 className="font-playfair text-black text-3xl font-bold">
          TASK MANAGER
        </h1>
        <p>Tu Organizador Personal</p>
        <br />
        <AddTasks AddTask={AddTask} />
        <Tasks
          tasks={tasks}
          OnclickTask={OnclickTask}
          OnclickDestroy={OnclickDestroy}
        />
      </div>
    </div>
  );
}

export default App;
