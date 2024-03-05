//reducer 2 step//
import {CreateStore}from 'redux';
import { SQUARE, CUBE } from './Action';

let initialstate = {
  squareResult: null,
  cubeResult: null
};


const Squarecube=(state=initialstate,action)=>
{
    // switch(action,type)
    // {
    //     case "SQUARE":
    //         return state=state**2;
    //         case "CUBE":
    //         return state=state**3;
    //         default:
    //                 return state;

    // }

    switch(action.type)
    {
        case "SQUARE":
            return {...state,squareResult:action.payload**2}
            case "CUBE":
            return {...state,cubeResult:action.payload**3}
            default:
                    return state;

    }

    }
    export{Squarecube}