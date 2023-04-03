// A02Props.js
import React from 'react'

function A02Props(props) {
  // 디스트럭처링으로 각 전달되는 값을 받아 처리
  const { name, age, add, tel, arr } = props;

  return (
    <div>
      <h3>A02 Function Property - immutable(참조만 가능)</h3>

      Name: {props.name}<br />
      Age: {props.age + 1}<br />
      Address: {props.add}<br />
      Te;: {props.tel}<br />
      Array: {props.arr[0]} / {props.arr[1]} / {props.arr[2]}<br />
      User: {props.user.name} / {props.user.age} / {props.user.address}<br />
      onAdd: {props.onAdd(10, 20)}<br />
      <br />
      <button onClick={props.addArray}>Add Array</button>
      <button onClick={() => props.updateArray(1, 2000)}>Update Array</button>
      <button onClick={() => props.deleteArray(1)}>Delete Array</button>

      {props.children}

      <hr />

      Name: {name}<br />
      Age: {age + 1}<br />
      Address: {add}<br />
      Te;: {tel}<br />
      Array: {arr[0]} / {arr[1]} / {arr[2]}<br />
    </div>
  )
}

export default A02Props