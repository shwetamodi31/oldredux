//create centeralised store step =4

// import { createStore } from "redux";
 import Rootreducer from "./Rootreducer";
 import { Squarecube } from "./Squarecubereducer";
// let Store=createStore(Rootreducer);
// export default Rootreducer;
import { createStore } from 'redux';

const store = createStore(Squarecube);

export default store;