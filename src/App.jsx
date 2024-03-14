import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/count";
import { useMemo } from "react";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <EvenCountRenderer />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
    </div>
  );
}

function EvenCountRenderer() {
  const count = useRecoilValue(countAtom);

  // optimize method - 1
  // const isEven = useMemo(() =>{
  //   return count % 2 == 0
  // }, [count])

 

  return <div>{count % 2 ? "" : "It is Even"}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          // setCount(count + 1);
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          // setCount(count - 1);
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
