import * as actionTypes from './actionTypes.js'
import {fromJS} from 'immutable'
const defaultState=fromJS({    //用immutable包装成immutable
    focused:false,
})

export default(state=defaultState,action)=>{      //这里reducer导出的是纯函数
    if(action.type===actionTypes.SEARCH_FOCUS){
        return  state.set('focused',true)
        //immutable.js的set方法，会结合之前immutable对象的值和设置的值，
        //然后返回一个全新的对象
       
        // {
        //     focused:true,
        // }
    }
    if(action.type===actionTypes.SEARCH_BLUR){
        return state.set('focused',false)
    }
    return state;
    
}