import '../style/stopwatch.css'


export default function Stopwatch(props){

;


    
  
    return(
        <div className="stopwatch">
            <div className="stopwatch-display">
               <div className="stopwatch-hours">{Math.floor(props.count/60/60)}</div> <span>:</span> <div className="stopwatch-minutes">{Math.floor(props.count/60)}</div> <span>:</span> <div className="stopwatch-seconds">{(props.count%60).toFixed(2)}</div>
            </div>
            <div className="stopwatch-btns">
                <button className="stopwatch-start_stop" onClick={() => {
                    props.setStopwatchStatus((prevState => !prevState))
                } }>Start/Stop</button>
                <button className="stopwatch-reset" onClick={() => props.setCount(0) }>Reset</button>
            </div>
        </div>
    )
}