import React, { useState, useEffect } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

function Home(){
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    console.log("Saved Todos:", savedTodos); 
    setTodos(savedTodos ? JSON.parse(savedTodos) : []);
  }, []);
  
  useEffect(() => {
    console.log("Saving Todos:", todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const createTask = (event) => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      alert('Вкажіть завдання.');
      return;
    }

    const newTodo = { description: inputValue, isChecked: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue('');
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
          <ListGroup.Item key={index} className={todo.isChecked ? 'todo-item--checked' : ''}>
            <Form.Check
              type="checkbox"
              checked={todo.isChecked}
              onChange={() => toggleCompletion(index)}
              inline
            />
            <span className="todo-item__description">{todo.description}</span>
            <Button variant="danger" onClick={() => deleteTask(index)} className="float-end">
              Видалити
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Home;