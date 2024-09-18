import type { Todo as ITodo } from "@prisma/client";
import Todo from "./Todo";

const TodoList = ({ todos }: { todos: ITodo[] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
