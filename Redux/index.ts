import { combineReducers } from "redux";

import items from "./Reducers/reducer";
import selected from "./Reducers/SelectFood"
import menu from "./Reducers/Menu";
import carts from "./Reducers/Cart";


export default combineReducers({ items , selected, menu, carts});