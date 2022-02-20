import React, {useState} from 'react'
import ChildCallBack from './ChildCallBack';

const HokCallBack = () => {
    const [Count, setCount] = useState(0);

    const OnChange =React.useCallback( () =>{
        setCount(Count + 1);
        document.title = `${Count + 1}`;
    }, [setCount, Count])

  return (
    <div>
        <p>{Count}</p>
        <ChildCallBack Increment={OnChange} />
    </div>
  )
}

export default HokCallBack;