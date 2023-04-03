import React, { useCallback, useEffect, useRef, useState } from "react";

function A05Hook() {
  // useState => 값 유지. 값이 변경되면 변경된 값 기반으로 화면 리 렌더링
  const [data, setData] = useState({
    num: 0,
    str: 'NolBu',
    address: 'Seoul'
  });
  const [today, setToday] = useState(new Date());

  // useRef
  // 1. 값 유지 목적 => 예제 4번 참조
  // 2. DOM 참조 목적 => JSX DOM 요소에 <Tag ref={numRef}> 형태로 기술해서 사용
  const numRef = useRef(null);


  // useCallback => 이벤트 핸들러를 렌더링될때마다 새롭게 만들지 않음 (메모이제이션)
  // [] => 함수 내부에서 참조된 state 변수, hook에 대한 의존 관계를 정의한다
  // 의존관계를 주입한 변수가 변경될때마다 이벤트 핸들러가 재 생성된다.

  /*
  const changeNumber = useCallback((evt) => {
    let value = Number(evt.target.value);
    if (isNaN(value)) value = 0;
    setData({ ...data, [evt.target.name]: value });
  }, [data]);

  const changeString = useCallback((evt) => {
    setData({ ...data, [evt.target.name]: evt.target.value });
  }, [data]);
  */
  const changeNumber = useCallback((evt) => {
    setData((data) => {
      let value = Number(evt.target.value);
      if (isNaN(value)) value = 0;
      return { ...data, [evt.target.name]: value }
    });
  }, []);

  const changeString = useCallback((evt) => {
    setData((data) => {
      return { ...data, [evt.target.name]: evt.target.value }
    });
  }, []);


  // LifeCycle Method => useEffect(callback, [의존성주입])
  // useEffect(callback) => 리렌더링 될때마다 실행된다
  // useEffect(callback, []) => 최초 1번만 실행된다
  // useEffect(callback, [state 변수명]) => 변수값이 변경되는 경우만 재 실행된다
  useEffect(() => {
    setTimeout(() => {
      setToday(new Date());
    }, 2000);
  }, [data]);

  // useEffect는 여러번 기술 가능 (기능별로 분리)
  useEffect(() => {
    // console.log(numRef.current)      // JavaScript 객체
    numRef.current.style.background = 'orange';
  }, []);

  return (
    <div>
      <h3>A05 useState, useEffect</h3>

      <div>
        Num: {data.num + 1}
        <input type="text" name="num" className="form-control" ref={numRef}
          onChange={changeNumber} />
        <br />
        Str: {data.str}
        <input type="text" name="str" className="form-control"
          value={data.str} onChange={changeString} />
        <br />
        Address: {data.address}
        <input type="text" name="address" className="form-control"
          value={data.address} onChange={changeString} />
        <br />

        Today: {today.toLocaleString()}<br />
        <br />
        Avg:
        <div className="input-group">
          <input type="text" name="str" className="form-control" />
          <button className="btn btn-outline-primary btn-sm">ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A05Hook;
