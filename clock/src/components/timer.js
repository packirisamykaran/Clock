

import { useEffect, useState } from 'react';
import '../style/timer.css';
import React from 'react';



export default function Timer(props){

    
    

    

     
    
    const reset = ()=>{
        props.setTotaltime(0);
        props.setHr(0);
        props.setMin(0);
        props.setSec(0);
        props.setRunning(false)

    }




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
            {/*    */}
            <div className="timer-display">
                <div className="timer-timings-container">
                    <button className="timer-ajt-btn" onClick={()=>incr(props.setHr)}>+</button>
                    <div className="timer-timing">{props.hr}</div>
                    <button className="timer-ajt-btn" onClick={()=>decr(props.setHr)}>-</button>
                </div>
                <div className="timer-timings-container">
                    <button className="timer-ajt-btn" onClick={()=>incr(props.setMin)}>+</button>
                    <div className="timer-timing">{props.min}</div>
                    <button className="timer-ajt-btn" onClick={()=>decr(props.setMin)}>-</button>
                </div>
                <div className="timer-timings-container">
                    <button className="timer-ajt-btn" onClick={()=>incr(props.setSec)}>+</button>
                    <div className="timer-timing">{props.sec}</div>
                    <button className="timer-ajt-btn" onClick={()=>decr(props.setSec)}>-</button>
                </div>
            </div>
            <div className="timer-btns">
                <button className="timer-start_stop" onClick={props.timer_start_stop} >Start/Stop</button>
                <button className="timer-reset" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}