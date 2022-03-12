import stopwatchReducer from "../slices/stopwatchSlice";
import { configureStore } from "@reduxjs/toolkit";


export default configureStore({
    reducer:{
        stopwatch: stopwatchReducer,
    }
})
