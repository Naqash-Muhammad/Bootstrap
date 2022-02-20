import React, {useReducer} from 'react';
const initialState = 0; 

const reducer = (state, action) =>{
    console.log(state, action)
    if(action.type === "Increment"){
        return(state + 1);
    }
    if(action.type === "Decrement"){
        return(state - 1);
    }

    if(action.type === "Incrementagain"){
        return(state + 3);
    }
}
const HokReduser = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <p>{state}</p>
        <button onClick={()=>dispatch({type: "Increment"})}>Increment</button>
        <br />
        <button onClick={()=>dispatch({type: "Decrement"})}>Decrement</button>
        <br />
        <button onClick={()=>dispatch({type: "Incrementagain"})}>Increment + 3</button>
    </div>
  )
}

export default HokReduser;