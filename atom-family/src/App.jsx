
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
  // get atom using atomFamily and render under return

  return (
    <h4>
      {"title here"}
      <br />
      {"description here"}
      <br />
    </h4>
  )
}

export default App
