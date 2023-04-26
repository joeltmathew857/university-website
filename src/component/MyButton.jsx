import React from 'react';
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 4);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
