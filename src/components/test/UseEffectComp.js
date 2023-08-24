import React from 'react'
import { useEffect } from 'react';

function UseEffectComp({number}) {

        console.log("another comp!");

    
  return (
    <div>
      {number}
    </div>
  )
}

export default UseEffectComp
