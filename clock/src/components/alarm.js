
import '../style/alarm.css';
import React, {useState, useEffect} from "react";





function AlarmTime(){

        
}


export default function Alarm(){

    const [time, setTime] = useState("00:00");
    const [alarmlist, setALarmlist] = useState([]);
    const [curtime, setCurtime] = useState();
    const [curalarm, setCuralarm] = useState();

    

    useEffect(()=>{
        curtimesetter();
        let timeout = setTimeout(curtimesetter, 1000*60);
        for(let t in alarmlist){
            if(alarmlist[t] == curtime){
                console.log("ring")
                removealarm(curtime)
                alarmring()
            }
        }
        return(()=>{
            clearTimeout(timeout)
        }) 
    })


    function pad(n){
        return n > 9 ? "" + n: "0" + n;
    }

    
    const curtimesetter= ()=>{
            const date = new Date();
            setCurtime((pad(date.getHours())+":"+pad(date.getMinutes())));
            
            console.log(curtime);
    }

    const changetime = () =>{
        const currenttime = document.getElementById("alarm-set-timing");
        setTime(currenttime.value)
    }
    

    
    

    

    // ALarm time setter and remover
    const setalarm = ()=>{

        setALarmlist(()=>{
            return [...alarmlist, time]
        })
        closeas()

        
    }

    const removealarm = (rangtime) =>{
        var key= alarmlist.indexOf(rangtime);
        let newalarmlist = [...alarmlist]
        newalarmlist.splice(key, 1);
        setALarmlist(newalarmlist);
    }

    const deletealarm = (key)=>{
        let newalarmlist = [...alarmlist]
        newalarmlist.splice(key, 1);
        setALarmlist(newalarmlist);
        console.log("deleted")
    }


    const alarmsetter = ()=>{
        const tselement = document.getElementById('alarm-setter');
        tselement.style.zIndex =1;
    }

    

    const closeas = ()=>{
        const tselement = document.getElementById('alarm-setter');
        tselement.style.zIndex = -1;
    }
    // ALarm time setter and remover

    


    // Alarm rang and close
    const alarmring = () =>{
        const element = document.getElementById('alarm-alert');
        element.style.zIndex = 2;
    }

    const closealert = ()=>{
        const element = document.getElementById('alarm-alert');
        element.style.zIndex = -1;
    }

    // Alarm rang and close


    return(
        <div className='alarm'>
            <div className='alarm-list'>
                {alarmlist.map((item, key)=>{
                    return(
                        <div className='alarm-list-item'key={key}>
                            <div className='alarm-time'>{item}</div>
                            <button className='alarm-delete' onClick={()=>{deletealarm(key)}}>Delete</button>
                        </div>
                    )
                })}
            </div>
            <div id='alarm-setter'>
                <button className='alarm-setter-cross' onClick={closeas}>X</button>
                <input id="alarm-set-timing" type='time' name='alarm-set-timing' onChange={changetime} defaultValue={time}/>
                <button className='alarm-set-btn' onClick={setalarm}>Set</button>
            </div>
            <div id='alarm-alert'>
                <h2 className='alarm-alert-message'>RING!!!</h2>
                <button className='alarm-alert-close' onClick={closealert}>Stop</button>
            </div>
            <div className='alarm-add-btn'>
                <button onClick={alarmsetter}>Add Alarm</button>
            </div>
        </div>

    )
}