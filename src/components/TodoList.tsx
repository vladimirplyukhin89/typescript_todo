import React from "react";
import TodoItem from "./TodoItem";
import { ITodo } from "../types/data";

interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, removeTodo, toggleTodo } = props;

  return (
    <div>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          {...item}
        />
      ))}
    </div>
  );
};

export default TodoList;
