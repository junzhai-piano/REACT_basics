import { useState } from "react";
import people from "./db-people.js";
import colors from "./db-colors.js";
import List from "./List.jsx";

function App() {
  const [count, setCount] = useState(5);

  const updateCount = () => setCount((count) => count + 1);

  return (
    <>
      <button onClick={updateCount}>count is {count}</button>

      <List dataset={people} property="name" />
      <List dataset={colors} property="color" />
    </>
  );
}

export default App;
