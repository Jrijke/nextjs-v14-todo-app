"use client";
import { completeTodo } from "@/utils/actions";
import type { Todo as ITodo } from "@prisma/client";
import { useTransition } from "react";

const Todo = ({ todo }: { todo: ITodo }) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => startTransition(() => completeTodo(todo.id));

  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? "line-through text-gray-900" : ""
      }`}
      onClick={handleClick}
      tabIndex={0}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
