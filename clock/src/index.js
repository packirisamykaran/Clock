import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import reportWebVitals from './reportWebVitals';
import {Routes, Route, Outlet, Link, BrowserRouter} from "react-router-dom";
import Clock from './components/clock';
import Alarm from './components/alarm';
import Timer from './components/timer';
import Stopwatch from './components/stopwatch';
import {Provider} from 'react-redux'
import store from './components/store';
import { counting} from "./slices/stopwatchSlice";
import { increment } from "./slices/stopwatchSlice";
import { useSelector, useDispatch } from "react-redux";


function Navbar(){


  return(
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Clock />} />
          <Route path='alarm' element={<Alarm />} />
          <Route path='timer' element={<Timer />} />
          <Route path='stopwatch' element={<Stopwatch />} />
          <Route path='*' element={<Clock />} />
        </Route>
      </Routes>
  )
}


function Layout(){


  //Clock
  

  //Clock


  // Stopwatch
  const countingstatus = useSelector(counting)
  const dispatch = useDispatch();

  const getcountstatus = ()=> countingstatus;

  let stopwatchInterval = null;
  if(countingstatus){
    stopwatchInterval = setInterval(() => {
        if(getcountstatus()){
          dispatch(increment());
          
         }else{
          clearInterval(stopwatchInterval)
         }
          
          
          
      }, 10);
  }
  console.log(countingstatus)

  // Stopwatch



  
  
  return(
    <div className='app'>
      {/* <div className='heading'>
        Clock
      </div> */}
      <div className='application'>
        <Outlet />
      </div>
      <div className='navbar'>
        <Link to="/"><img src='https://cdn-icons-png.flaticon.com/512/2088/2088617.png'></img></Link>
        <Link to="alarm"><img src='https://cdn-icons.flaticon.com/png/512/2838/premium/2838572.png?token=exp=1645882522~hmac=2ecebc4db40058599899fed6feecf39f'></img></Link>
        <Link to="timer"><img src='https://cdn-icons.flaticon.com/png/128/3240/premium/3240637.png?token=exp=1645882622~hmac=c83fe1c82a5969291c2b1a774fa461c7'></img></Link>
        <Link to="stopwatch"><img src='https://cdn-icons-png.flaticon.com/128/1842/1842869.png'></img></Link>
      </div>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
