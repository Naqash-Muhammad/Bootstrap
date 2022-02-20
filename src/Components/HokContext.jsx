import React, {useContext} from 'react'
import { Fname, Lname } from './HookEffect';

const HokContext = () => {
    const fname = useContext(Fname);
    const lname = useContext(Lname);

  return (
    <h4>my name is {fname} {lname}</h4>
  )
}

export default HokContext;