

import { useEffect, useState } from 'react';
import '../style/timer.css';
import React from 'react';



export default function Timer(){

    const [sec, setSec] = useState(0);
    const [hr, setHr] = useState(0);
    const [min, setMin] = useState(0);
    const [totaltime, setTotaltime] = useState(0);
    const [running, setRunning] = useState(false)

    

    const start_stop = ()=> {

        if(!running && ((hr+min+sec) !=0)) {
            setTotaltime(()=>{
            return (hr*3600 +min*60 + sec);
        })
    }

    setRunning(!running);
        
    }; 
    
    const reset = ()=>{
        setTotaltime(0);
        setHr(0);
        setMin(0);
        setSec(0);
        setRunning(false)

    }

    useEffect(()=>{
        
        
        let timer=null;
        if(running && (totaltime>0)){
            timer=setTimeout(() => {
                setTotaltime((tsec)=>{
                   if(tsec>0){
                    return tsec-0.01;
                   }
                })

                setHr(Math.floor(totaltime/3600));
                setMin(Math.floor((totaltime/60)%60));
                setSec(Math.floor(totaltime%60));
                

            }, 10);

            
        }
         else{
            clearTimeout(timer);
         }  
         
         return()=>{
             clearTimeout(timer)
         }

         
    }, [totaltime, running])


    const incr = (setter) =>{
        setter((value)=> value+1)
    }

    const decr  = (setter) =>{
        setter((value)=> {
            if(value<=0){
            return value;
            }else{
                return value-1;
            }

        } )
    }

    return(
        <div className="timer">
            {/* total:{Math.floor(totaltime)} */}
            <div className="timer-display">
                <div className="timer-timings-container">
                    <button className="timer-ajt-btn" onClick={()=>incr(setHr)}>+</button>
                    <div className="timer-timing">{hr}</div>
                    <button className="timer-ajt-btn" onClick={()=>decr(setHr)}>-</button>
                </div>
                <div className="timer-timings-container">
                    <button className="timer-ajt-btn" onClick={()=>incr(setMin)}>+</button>
                    <div className="timer-timing">{min}</div>
                    <button className="timer-ajt-btn" onClick={()=>decr(setMin)}>-</button>
                </div>
                <div className="timer-timings-container">
                    <button className="timer-ajt-btn" onClick={()=>incr(setSec)}>+</button>
                    <div className="timer-timing">{sec}</div>
                    <button className="timer-ajt-btn" onClick={()=>decr(setSec)}>-</button>
                </div>
            </div>
            <div className="timer-btns">
                <button className="timer-start_stop" onClick={start_stop} >Start/Stop</button>
                <button className="timer-reset" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}