import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counter/countSlice"

const myStore = configureStore({
    reducer : {
        counter: countReducer
    }
})

export default myStore