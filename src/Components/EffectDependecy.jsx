import React, {useEffect, useState} from 'react';

const EffectDependecy = () => {

    const [state, setstate] = useState(0);

    const onChange = () =>{
        setstate(state + 1);
    }

    useEffect( ()=>{
        if(state > 1){
            document.title = `${state}`;
        }else{
            document.title = `chat`;
        }
        
    },[state])

  return (
    <div>
        <p>{state}</p>
        <button onClick={onChange}>Click dependency</button>
    </div>
  )
}

export default EffectDependecy;