import { configureStore } from "@reduxjs/toolkit";
// import staffslice from "./staffslice";
import jobsSlice from "./jobsSlice";

// const preloadedState = () => {
//     fetch('http://127.0.0.1:8000/' + endpoint + '/')
//         .then(
//             res => { return res.json() }
//         ).then(data => {
//             // console.log(data[endpoint])
//             setData(data[endpoint])
//         })
//     // console.log('custom data retrieved')
// }
// console.log(preloadedState)


export const store = configureStore({
    reducer: {
        // staff: staffslice,
        jobs: jobsSlice,
    },
    // preloadedState
});