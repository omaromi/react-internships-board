import { configureStore } from "@reduxjs/toolkit"
// import reducers from "./reducers/index";
import staffslice from "./staffslice";

const store = configureStore({
    reducer: {
        staff: staffslice
    }
});

export default store