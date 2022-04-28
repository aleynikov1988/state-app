import { createStore } from "redux";
import { counter } from "../reducers"

const initState = {
    value: 0
};

const store = createStore(counter, initState);

export default store;
