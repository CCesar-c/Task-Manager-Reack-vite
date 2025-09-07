import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Componentes";

function Tasks(props) {
  const navigation = useNavigate();

  function handleNavigation(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigation(`/About?${query.toString()}`);
  }
  return (
    <div>
      <ul className="space-y-4 p-6 bg-gradient-to-t from-orange-300  bg-orange-600  rounded-md shadow">
        {props.tasks.map((task) => (
          <li key={task.id} className="flex gap-4">
            <Button
              onClick={() => props.OnclickTask(task.id)}
              className={` ${task.isComplete && "line-through"}`}
              children={task.title}
            />

            <Button
              onClick={() => {
                handleNavigation(task);
              }}
            >
              <ChevronRightIcon />
            </Button>
            <Button onClick={() => props.OnclickDestroy(task.id)} className="">
              <TrashIcon className="text-black" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Tasks;
