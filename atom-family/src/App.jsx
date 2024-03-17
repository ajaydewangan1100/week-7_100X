import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todoAtomFamily } from "./atoms.js";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  // get atom using atomFamily and render under return
  const todo = useRecoilValue(todoAtomFamily(id));

  return (
    <h4>
      {todo.title}
      <br />
      {todo.description}
      <br />
    </h4>
  );
}

export default App;
