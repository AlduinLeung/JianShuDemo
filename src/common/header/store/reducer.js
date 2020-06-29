import * as actionTypes from './actionTypes.js'
import {fromJS} from 'immutable'
const defaultState=fromJS({    //用immutable包装成immutable
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalpage:1
})

export default(state=defaultState,action)=>{      //这里reducer导出的是纯函数
    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
            return  state.set('focused',true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused',false);
        case actionTypes.CHANGE_LIST:
            return state.merge({
                list:action.data,
                totalpage:action.totalpage
            }); //性能相比多次调用还更高
            // return state.set('list',action.data).set('totalpage',action.totalpage);   //在这里呢，可以使用immutable的 merge api来合并set方法
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn',true)
        case actionTypes.MOUSE_LEAVE:      
            return state.set("mouseIn",false)
        case actionTypes.CHANGE_PAGE:
            return state.set("page",action.page)
            default: return state;
    }
    // if(action.type===actionTypes.SEARCH_FOCUS){
    //     return  state.set('focused',true);
    //     //immutable.js的set方法，会结合之前immutable对象的值和设置的值，
    //     //然后返回一个全新的对象
       
    //     // {
    //     //     focused:true,
    //     // }
    // }
    // if(action.type===actionTypes.SEARCH_BLUR){
    //     return state.set('focused',false)
    // }
    // if(action.type===actionTypes.CHANGE_LIST){
    //     return state.set('list',action.data);    //所以这里接受到的action.data也是一个immutable的对象
    // }
    
    
}