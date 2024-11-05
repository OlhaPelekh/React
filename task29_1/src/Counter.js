import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./store/store.js";
import { Stack, Button } from "react-bootstrap";

function Counter (){
  const dispatch = useDispatch();

  return (
    <Stack direction="horizontal" gap={2}>
      <Button variant="secondary" onClick={() => dispatch(increment())}>
        +
      </Button>
      <Button variant="secondary" onClick={() => dispatch(decrement())}>
        -
      </Button>
    </Stack>
  );
};

export default Counter;
