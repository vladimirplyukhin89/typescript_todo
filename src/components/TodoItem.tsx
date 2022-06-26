import React from "react";
import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, completed, removeTodo, toggleTodo } = props;

  return (
    <div style={{ display: "flex", margin: "1rem" }}>
      <p>{title}</p>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <button onClick={() => removeTodo(id)}>X</button>
    </div>
  );
};

export default TodoItem;
