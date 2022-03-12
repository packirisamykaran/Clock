import '../style/stopwatch.css'
import { counting, timing } from "../slices/stopwatchSlice";
import { useSelector, useDispatch } from "react-redux";
import { increment, reset, startstop } from "../slices/stopwatchSlice";


export default function Stopwatch(){


    const count = useSelector(timing);
    const dispatch = useDispatch();


    
  
    return(
        <div className="stopwatch">
            <div className="stopwatch-display">
               <div className="stopwatch-hours">{Math.floor(count/60/60)}</div> <span>:</span> <div className="stopwatch-minutes">{Math.floor(count/60)}</div> <span>:</span> <div className="stopwatch-seconds">{(count%60).toFixed(2)}</div>
            </div>
            <div className="stopwatch-btns">
                <button className="stopwatch-start_stop" onClick={()=>dispatch(startstop()) }>Start/Stop</button>
                <button className="stopwatch-reset" onClick={()=>dispatch(reset()) }>Reset</button>
            </div>
        </div>
    )
}