import React from 'react'
import { useState } from 'react';

function BasicHooks() {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter +1);
    }

  return (

    //useState
    <div style={{  display:'flex', alignItems:'center', justifyContent:'center',gap:13, height:150 }}>
      {counter}<button onClick={increment} style={{borderColor:'gray', padding:3, backgroundColor:'white', borderRadius:5}}>increase</button>
    </div>


  )
}

export default BasicHooks
