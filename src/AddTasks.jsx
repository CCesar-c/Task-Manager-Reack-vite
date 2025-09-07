import { useState } from "react";
import { Input, Button } from "./Componentes.jsx";

function AddTasks(props) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  return (
    <div className="space-y-2">
      <Input
        type="text"
        placeholder="Digite un titulo"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
      />
      <br />
      <Input
        type="text"
        placeholder="Digite una descripcion"
        value={descripcion}
        onChange={(event) => setDescripcion(event.target.value)}
      />
      <br />
      <Button
        onClick={() => {
          if (titulo.trim() === "" || descripcion.trim() === "") {
            return alert("Por favor, complete ambos campos.");
          }
          props.AddTask(titulo, descripcion);
          setTitulo("");
          setDescripcion("");
        }}
        children={"Add Task"}
      />
    </div>
  );
}
/*    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
      rel="stylesheet"
    />*/
/*         props.AddTask(
            document.querySelector('input[placeholder="Digite un titulo"]')
              .value,
            document.querySelector(
              'input[placeholder="Digite una descripcion"]'
            ).value
          ) */
export default AddTasks;
