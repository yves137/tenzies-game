import { useState } from "react"
import { TossItem } from "./TossItem"

export function Board(){
    const [rolledResult,setRolledResult]=useState(Array(10).fill(null))
    const [tossed,setTossed]=useState(Array(10).fill(null).map(v=>Math.floor(Math.random() * 6) + 1))
    const [startNew,setStartNew]=useState(false)
    
    function updateRolledResult(id,result) {
        const tempArr=rolledResult.map((v,i) => i===id?result:v)
        setRolledResult(tempArr)
        if(tempArr.every(v=>v===result))
        setStartNew(true)
    }
    
    return (
        <div className="mt-10 flex flex-col items-center">
            <div className="mb-10 grid gap-7 grid-cols-5">
                {tossed.map((v,i) => <TossItem key={i} itemId={i} tossed={tossed} updateRolledResult={updateRolledResult}/>)}
            </div>
            {startNew? 
            <>
                <button className="bg-[#5035FF] hover:bg-[#2a2d7e] duration-500 rounded-md py-5 px-20 text-white text-2xl font-semibold" onClick={()=>{
                    window.location.reload(false);
                }}>New Game</button>

                <div className="bg-green-200 px-40 py-7 mt-8 animate-bounce transition-all duration-1000">
                    Congratulation, You Won!!
                </div>
            </>
            :
            <button className="bg-[#5035FF] hover:bg-[#2a2d7e] duration-500 rounded-md py-5 px-20 text-white text-2xl font-semibold" onClick={()=>{
                setTossed(Array(10).fill(null).map(v=>Math.floor(Math.random() * 6) + 1))
            }}>ROll</button>
        }

        </div>
    )
}