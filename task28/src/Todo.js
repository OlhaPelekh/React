import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "tailwindcss/tailwind.css";

const schema = z.object({
  todo: z.string().min(5, "Завдання повинно містити щонайменше 5 символів"),
});

function Todo() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTask = (data) => {
    const newTodo = { description: data.todo, isChecked: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    reset();
  };

  const deleteTask = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  const toggleCompletion = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  return (
    <div className="container mx-auto mt-10 max-w-md p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <form onSubmit={handleSubmit(createTask)} className="mb-4">
        <input
          type="text"
          placeholder="Вкажіть завдання"
          {...register("todo")}
          className="w-full p-2 border rounded-md"
        />
        {errors.todo && (
          <p className="text-red-500 text-sm">{errors.todo.message}</p>
        )}
        <button
          type="submit"
          className="w-full mt-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Додати завдання
        </button>
      </form>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 border rounded-md"
          >
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={todo.isChecked}
                onChange={() => toggleCompletion(index)}
                className="form-checkbox h-5 w-5"
              />
              <span
                className={todo.isChecked ? "line-through text-gray-500" : ""}
              >
                {todo.description}
              </span>
            </label>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-700"
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
