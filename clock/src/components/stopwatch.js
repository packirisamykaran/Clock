import React, {useState, useEffect} from "react"
import '../style/stopwatch.css'


export default function Stopwatch(){

    const [sec, setSec] = useState(0);
    const [running, setRunning] = useState(false)
    
    const start_stop = ()=> setRunning(!running); 
    
    const reset = ()=>{
        setSec(0)
    }

    useEffect(()=>{
        
        
        let timer=null;
        if(running){
            timer=setTimeout(() => {
                setSec((sec)=>sec+0.01)
            }, 10);
        }
         else{
            clearTimeout(timer);
         }  
         
         return()=>{
             clearTimeout(timer)
         }

         
    }, [sec, running])


    return(
        <div className="stopwatch">
            <div className="stopwatch-display">
               <div className="stopwatch-hours">{Math.floor(sec/60/60)}</div> <span>:</span> <div className="stopwatch-minutes">{Math.floor(sec/60)}</div> <span>:</span> <div className="stopwatch-seconds">{(sec%60).toFixed(2)}</div>
            </div>
            <div className="stopwatch-btns">
                <button className="stopwatch-start_stop" onClick={start_stop}>Start/Stop</button>
                <button className="stopwatch-reset" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}