
import {fromJS} from 'immutable'
import {actionType} from './index'
const defaultState=fromJS({
    login:false,
});
export default(state=defaultState,action)=>{      //这里reducer导出的是纯函数
    switch(action.type){
        case actionType.CHANGE_LOGIN:
            return state.set('login',action.value)
        case actionType.LOGOUT:
            return state.set('login',action.value)
        default:
            return state; 
    }
    
 
 
} 