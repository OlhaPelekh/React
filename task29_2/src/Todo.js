import { useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./store/store.js";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.items);

  const createTask = (evt) => {
    evt.preventDefault();
    if (inputValue.trim() === "") {
      alert("Вкажіть завдання.");
      return;
    }
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  const deleteTask = (index) => {
    dispatch(removeTodo(index));
  };

  const toggleCompletion = (index) => {
    dispatch(toggleTodo(index));
  };

  return (
    <Container>
      <h1>Todo List</h1>
      <Form onSubmit={createTask}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Вкажіть завдання"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Додати завдання
        </Button>
      </Form>
      <ListGroup className="mt-3">
        {todos.map((todo, index) => (
          <ListGroup.Item
            key={index}
            className={todo.isChecked ? "todo-item--checked" : ""}
          >
            <Form.Check
              type="checkbox"
              checked={todo.isChecked}
              onChange={() => toggleCompletion(index)}
              inline
            />
            <span className="todo-item__description">{todo.description}</span>
            <Button
              variant="danger"
              onClick={() => deleteTask(index)}
              className="float-end"
            >
              Видалити
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Todo;
