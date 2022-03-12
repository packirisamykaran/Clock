import React, {useState, useEffect} from "react";
import '../style/clock.css'

export default function Clock(){

    let date = new Date()

    
    const [hr, setHr] = useState(((date.getHours() + 11) % 12 + 1));
    const [min, setMin] = useState(date.getMinutes());
    const [sec, setSec] = useState(date.getSeconds());
    const [midday, setMidday] = useState("PM");

    const inc = 1000;

    
    function clock() {
        date = new Date();
    
      const hours = ((date.getHours() + 11) % 12 + 1);
      const minutes = date.getMinutes();
      const seconds =date.getSeconds();


      
      const hour = hours * 30;
      const minute = minutes * 6;
      const second = seconds * 6;
      
      setHr(hours);
      setMin(minutes);
      setSec(seconds);

      if(date.getHours()>12){
          setMidday("PM")
      }
      else{
          setMidday("AM")
      }

      
      try {
        document.querySelector('.time-hour').style.transform = `rotate(${hour}deg)`
        document.querySelector('.time-minute').style.transform = `rotate(${minute}deg)`
        document.querySelector('.time-second').style.transform = `rotate(${second}deg)`
      } catch (error) {
          
      }
     
    }


    
    useEffect(()=>{
        // setInterval(clock, inc);

        let timeout = setTimeout(clock, inc);
        return(()=>{
            clearTimeout(timeout)
        })
    })
    
    
    return(
        <div className="time">
            <div className="clock">
                <div className="time-wrap">
                    <span className="time-hour"></span>
                    <span className="time-minute"></span>
                    <span className="time-second"></span>
                    <span className="time-dot"></span>
                </div>
            </div>
            <div className="digital-time">
                {/* {hr}:{min}:{sec}  */}
                <div>{hr}</div>
                <span>:</span>
                <div>{min}</div>
                <span>:</span>
                <div>{sec}</div>
                <span>{midday}</span>
                
            </div>
        </div>

    )
}