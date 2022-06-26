import React from "react";
import { ITodo } from "../types/data";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";

const App: React.FC = () => {
  const [value, setValue] = React.useState("");
  const [todo, setTodo] = React.useState<ITodo[]>([]);

  const addTodo = () => {
    if (value.trimEnd().length) {
      setTodo([
        ...todo,
        {
          id: uuid(),
          title: value,
          completed: false,
        },
      ]);
    }
    setValue("");
  };

  const removeTodo = (id: string): void => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const toggleTodo = (id: string): void => {
    setTodo(
      todo.map((item) => {
        if (item.id !== id) return item;

        return {
          ...item,
          completed: !item.completed,
        };
      })
    );
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [todo]);

  return (
    <div>
      {/*<TodoInput value={value} setValue={setValue} addTodo={addTodo} />*/}
      <div>
        <input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button
          onClick={() => {
            addTodo();
          }}
        >
          Add todo
        </button>
      </div>
      <TodoList items={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
