import {actionType} from './index'
import {fromJS} from 'immutable'
const defaultState=fromJS({
    title:"",
    content:""
})
export default(state=defaultState,action)=>{      //这里reducer导出的是纯函数
   switch(action.type){
       case actionType.CHANGE_DETAIL:
           return state.merge({
               title:action.title,
               content:action.content,
           })
           default:
        return defaultState
   }
} 
