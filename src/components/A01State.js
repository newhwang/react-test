// A01State.js
import React, { useState } from 'react'

function A01State() {
  let name = 'NolBu';
  let age = 20;

  const changeName = (evt) => {
    console.log(evt.target);
    name = 'HungBu';
  }
  const changeAge = (num, evt) => {
    console.log(num)
    age = num;
  }

  // 상태 관리를 위한 변수 선언. useStage라는 Hook을 이용한다
  // const [변수명, 변수를 변경할 setter 함수명] = useState(초기값);
  // 변수는 Getter
  const [address, setAddress] = useState('Seoul');
  const [num, setNum] = useState(0);
  const [check, setCheck] = useState(true);
  const [arr, setArray] = useState([10, 20]);
  const [user, setUser] = useState({ name: 'A', age: 10 });

  const changeAddress = () => setAddress('Busan');
  const increase = (x) => setNum(num + x);
  const decrease = () => setNum(num - 1);
  const changeCheck = () => setCheck(!check);

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

  const addObject = (key, value) => {
    // { name: 'A', age: 10 }
    const newObject = { ...user, [key]: value }
    // console.log(newObject === user)
    setUser(newObject)
  }
  const updateObject = (key, value) => {
    const newObject = { ...user, [key]: value }
    setUser(newObject)
  }
  const deleteObject = (key) => {
    delete user[key];
    const newObject = { ...user }
    setUser(newObject)
  }

  return (
    <div>
      <h3>Function State</h3>
      <div>
        Name: {name}<br />
        Age: {age}<br />
        Address: {address}<br />
        칸터: {num}<br />
        체킇: {check ? '동의' : '동의 안할까?'}<br />
        Array: {arr[0]} / {arr[1]} / {arr[2]}<br />
        User: {user.name} / {user.age} / {user.address}<br />
      </div>

      <div>
        <button onClick={changeName}>Name</button>
        <button onClick={(evt) => changeAge(100, evt)}>Age</button>
        <button onClick={changeAddress}>Address</button>
        <button onClick={() => increase(2)}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={changeCheck}>체크하시오</button>
        <br />
        <button onClick={addArray}>Add Array</button>
        <button onClick={() => updateArray(2, 666)}>Update Array</button>
        <button onClick={() => deleteArray(1)}>Delete Array</button>

        <button onClick={() => addObject('address', '아싸!')}>Add Object</button>
        <button onClick={() => updateObject('address', '쫗다')}>Update Object</button>
        <button onClick={() => deleteObject('address')}>Delete Object</button>
      </div>
    </div>
  )
}

export default A01State
