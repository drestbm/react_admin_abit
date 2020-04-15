import { createStore } from "redux";
import redusers from './redusers/redusers'

let store = createStore(redusers);

export default store;