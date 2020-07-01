import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store/index'
import {reducer as homeReducer} from '../pages/home/store/index'  //这种导出方式其实就是把默认导出进行了重命名
//state的初始值是在这里创建的 
// 
const reducer=combineReducers({
    header:headerReducer,
    home:homeReducer,
})

export default reducer;