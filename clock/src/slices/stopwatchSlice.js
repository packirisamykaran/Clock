import {createSlice} from '@reduxjs/toolkit'


 export const stopwatchSlice = createSlice({
    name: 'stopwatch',
    initialState:{
        value:0,
        counting:false,
    },
    reducers: {
        increment: (state) => {
            state.value += 0.005
        },

        reset: (state) => {
            state.value = 0;
        },

        startstop: (state) =>{
            state.counting = !state.counting
        }
    }
})


export const {increment, reset, startstop} = stopwatchSlice.actions;


export const timing = (state) => state.stopwatch.value;
export const counting = (state) => state.stopwatch.counting;

export default stopwatchSlice.reducer;



