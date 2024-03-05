
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { cube } from './Action';

const Child = ({number}) => {
  const cubeResult = useSelector(state => state.cubeResult);
  
  const dispatch = useDispatch();

  const CubeClick = () => {
    dispatch({type: 'CUBE' , payload:parseInt(number)});
  };

  return (
    <div>
      <button onClick={CubeClick}>Cube</button>
      <div>Cube Result: {cubeResult}</div>
    </div>
  );
};

export default Child;
