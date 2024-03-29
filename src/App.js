import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { square } from './Action';
import { cube } from './Action';
import Child from './child';
import { Squarecube } from './Squarecubereducer';

const App = () => {
  const [number, setNumber] = useState();
  const squareResult = useSelector(state => state.squareResult);
  const cubeResult = useSelector(state => state.cubeResult);
  const dispatch = useDispatch();

  // console.log(squareResult)

  // const Change = (e) => {
  //   setNumber(e.target.value);
  // };

  const Click = () => {
    console.log(number)
    dispatch({type: 'SQUARE' , payload:parseInt(number)});
  };

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={Click}>Square</button>
      <div>Square Result: {squareResult}</div>
      <div>Cube Result: {cubeResult}</div>
      <Child number={number} />
    </div>
  );
};

export default App;





























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































