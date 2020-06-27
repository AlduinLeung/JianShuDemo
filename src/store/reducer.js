import {combineReducers} from 'redux-immutable';
import headerReducer from '../common/header/store/reducer.js'
//state的初始值是在这里创建的 
// 
const reducer=combineReducers({
    header:headerReducer
})

export default reducer;