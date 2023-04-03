import { useState } from 'react';
import A01State from './components/A01State'
import A02Props from './components/A02Props'
import A04CreateDOM from './components/A04CreateDOM'
import A05Hook from './components/A05Hook'
import A06Hook from './components/A06Hook'

function App() {
  const address = 'Seoul';
  const [tel, setTel] = useState('12345');
  const [arr, setArray] = useState([10, 20]);
  const [user, setUser] = useState({ name: 'A', age: 10 });
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`

  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    const newArray = arr.concat(random);
    setArray(newArray)
  }
  const updateArray = (index, value) => {
    const newArray = arr.map((item, i) => index === i ? value : item);
    setArray(newArray)
  }
  const deleteArray = (index) => {
    const newArray = arr.filter((item, i) => index === i ? false : true);
    setArray(newArray)
  }

  return (
    <div className="m-3">
      <h1>Chap01 Component</h1>

      <A06Hook></A06Hook><br />
      <A05Hook></A05Hook><br />
      <A04CreateDOM></A04CreateDOM><br />

      {/* 
        데이터 전달은 상위 컴퍼넌트가 하위 컴퍼넌트로 전달하는 방식만 지원한다
        데이터 전달은 속성 방식으로 전달한다 
      */}
      <A02Props
        name={"NolBu"}
        age={30}
        add={address}
        tel={tel}
        arr={arr}
        user={user}
        onAdd={onAdd}
        addArray={addArray}
        updateArray={updateArray}
        deleteArray={deleteArray}>
        <h5>Hello</h5>
      </A02Props><br />
      <A02Props
        name={"NolBu"}
        age={30}
        add={address}
        tel={tel}
        arr={arr}
        user={user}
        onAdd={onAdd}
        addArray={addArray}
        updateArray={updateArray}
        deleteArray={deleteArray}>
        <h5>World</h5>
      </A02Props><br />



      <A01State></A01State>

      <br />
      <A01State></A01State>


    </div>
  );
}

export default App;
