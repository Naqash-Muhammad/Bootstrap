import React, {useState, useEffect, createContext} from 'react'
import HokContext from './HokContext';
const Fname = createContext();
const Lname = createContext();

const HookEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
      });
  return (
    <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>

    <Fname.Provider value='Naqash'>
      <Lname.Provider value="M.Ali">
      <HokContext />
      </Lname.Provider>
    </Fname.Provider>
  </div>
  )
}

export default HookEffect;
export {Fname,Lname};