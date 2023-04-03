import React, { useRef, useState } from "react";

function A04CreateDOM() {
  const baseArray = ["NC", "두산", "엘지", "KT", "키움"];

  const [baseObject, setBaseObject] = useState([
    { id: 1, team: "NC", value: "NC" },
    { id: 2, team: "두산", value: "Doosan" },
    { id: 3, team: "엘지", value: "LG" },
  ]);

  const [data, setData] = useState({
    teamOne: "",
    teamTwo: "",
    team: "",
    isChecked: false,
  });

  // let cnt = 4;
  // 리렌더링 되더라도 값을 초기화 하지 않는다
  // useState와는 달리 이 값이 변경되도 화면 갱신 작업을 하지 않는다 (값만 변경되면서 유지)
  // 값은 cnt.current 형태로 참조
  let cnt = useRef(4);
  const addTeam = () => {
    const newObj = { id: cnt.current++, team: "삼성", value: "Samsung" }
    const newData = baseObject.concat(newObj);
    setBaseObject(newData);
  }
  const changeTeam = (evt) => {
    const newData = { ...data, team: evt.target.value }
    setData(newData);
  }

  // const changeValue = (evt) => setData({ ...data, team: evt.target.value });
  const changeValue = (evt) => setData({ ...data, [evt.target.name]: evt.target.value });
  const addBaseArray = () => {
    baseArray.push(data.team);
    console.log(baseArray)
  };

  const showHide = () => setData({ ...data, isChecked: !data.isChecked });

  const makeTable = () => {
    return baseObject.map(item => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.team}</td>
        <td>{item.value}</td>
      </tr>
    ))
  }

  return (
    <div>
      <h3>A04 Make DOM</h3>

      SelectBox: {data.teamOne}
      <br />
      <select name="teamOne" className="form-control" onChange={changeValue}>
        <option>선택해주세요</option>
        {baseArray.map((item, index) => <option key={index}>{item}</option>)}
      </select>

      SelectBox: {data.teamTwo}
      <br />
      <select name="teamTwo" className="form-control" onChange={changeValue}>
        <option value="">선택해주세요</option>
        {baseObject.map((item) => <option key={item.id} value={item.value}>{item.team}</option>)}
      </select>

      <table className="table">
        <thead>
          <tr>
            <th>NO</th>
            <th>Team</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {makeTable()}
        </tbody>
      </table>

      <button className="btn btn-outline-primary btn-sm" onClick={addTeam}>
        ADD TEAM
      </button>
      <br />
      <br />

      {data.isChecked &&
        <div className="input-group">
          <input type="text" className="form-control" name="team" value={data.team} onChange={changeTeam} />
          <button className="btn btn-outline-primary btn-sm" onClick={addBaseArray}>
            ADD
          </button>
        </div>
      }

      <br />
      <button className="btn btn-outline-primary btn-sm" onClick={showHide}>
        {data.isChecked ? "HIDE" : "SHOW"}
      </button>
    </div>
  );
}
export default A04CreateDOM;
