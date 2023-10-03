import { useState } from "react";

export function TossItem({itemId,tossed,updateRolledResult}) {

    const [currentValue,setCurrentValue]=useState([])
    const [isClicked,setIsclicked]=useState(false)
    function handleClick(){
        if(!isClicked){
             setCurrentValue([tossed[itemId]])
             updateRolledResult(itemId,tossed[itemId])
             console.log(currentValue)
        }
        else
            tossed[itemId]=currentValue[0]
        setIsclicked(v=>!v)
    }

  return (
    
      isClicked ? <button className="px-10 rounded-xl py-6 text-3xl bg-green-400 hover:rotate-6 duration-300 font-bold shadow-md shadow-slate-600" onClick={()=>handleClick()}>
          {currentValue[0]}
        </button>
      : <button className="px-10 rounded-xl py-6 text-3xl hover:rotate-6 duration-300 font-bold shadow-md shadow-slate-600" onClick={()=>handleClick()}>
          {tossed[itemId]}
        </button>
  );

}
