
import '../style/alarm.css';
import React, {useState, useEffect} from "react";





function AlarmTime(){

        
}


export default function Alarm(){

    const alarmsetter = ()=>{
        const tselement = document.getElementById('alarmsetter')
    }


    return(
        <div className='alarm'>
            <div className='alarm-list'>
                Alarm List
            </div>
            <div id='alarm-setter'>
                <button className='alarm-setter-cross'>X</button>
                <input type='time' name='alarm-set-timing' />
                <button className='alarm-set-btn'>Set</button>
            </div>
            <div className='alarm-add-btn'>
                <button onClick={alarmsetter}>Add Alarm</button>
            </div>
        </div>

    )
}