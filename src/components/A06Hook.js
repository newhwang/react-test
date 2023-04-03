import React, { useCallback, useEffect, useMemo, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_NUMBER':
      let value = Number(action.payload.value)
      if (isNaN(value)) value = 0;
      return { ...state, [action.payload.name]: value }
    case 'CHANGE_STRING':
      return { ...state, [action.payload.name]: action.payload.value };
    case 'CHANGE_TODAY':
      return { ...state, today: new Date() };
    case 'ADD_LIST':
      return { ...state, list: state.list.concat(state.avg) }
    default:
      return state;
  }
};

function A06Hook() {
  const [data, dispatch] = useReducer(reducer, {
    num: 0,
    str: '',
    today: new Date(),
    avg: '',
    list: [],
  });

  const changeNumber = useCallback(evt => {
    dispatch({ type: 'CHANGE_NUMBER', payload: evt.target })
  }, []);
  const changeString = useCallback(evt => {
    dispatch({ type: 'CHANGE_STRING', payload: evt.target });
  }, []);
  const addList = useCallback(() => dispatch({ type: 'ADD_LIST' }), []);

  useEffect(() => {
    dispatch({ type: 'CHANGE_TODAY' });
  }, []);

  // useMemo
  const getAverage = (list) => {
    console.log('계산중...');
    if (list.length === 0) return 0;
    const total = list.reduce((total, item) => total + item, 0);
    return total / list.length;
  }

  const getAverageMemo = useMemo(() => {
    return getAverage(data.list);
  }, [data.list])

  return (
    <div>
      <h3>A06. Reducer</h3>

      <div>
        Num: {data.num}
        <input type="text" name="num" className="form-control"
          value={data.num} onChange={changeNumber} />
        <br />

        Str: {data.str}
        <input type="text" name="str" className="form-control"
          value={data.str} onChange={changeString} />
        <br />

        Today: {data.today.toLocaleString()}<br />
        <br />

        Avg: {data.avg} / {getAverageMemo}
        <div className="input-group">
          <input type="text" name="avg" className="form-control"
            value={data.avg} onChange={changeNumber} />
          <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A06Hook;
