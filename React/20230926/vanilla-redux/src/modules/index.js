import goodsReducer from "./goodsCounter";
import stockReducer from "./stockCounter";
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    goodsReducer,
    stockReducer
});


export default rootReducer;