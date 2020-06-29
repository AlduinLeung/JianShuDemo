//使用actionCreators来避免程序出错
//然后可以使用常量来继续拆分
//这里要记得拆分了以后还要去reducer那边去修改，因为reducer还是之前的常量
import * as actionTypes from './actionTypes.js'
import axios from 'axios'
import {fromJS} from 'immutable'

const changeList=(data)=>({
    type:actionTypes.CHANGE_LIST,            //ChangeList action，用来改变的是搜索框中的列表
    data:fromJS(data)   //值得注意的是，在reducer里，state使用了Immutable来进行包裹，所以这里在派发给reducer的时候也应该是一个immutable的对象
 })




 export const searchFocus=()=>({
     type:actionTypes.SEARCH_FOCUS   
 });
 export const searchBlur=()=>({
     type: actionTypes.SEARCH_BLUR
 });

 
export const getList=()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json')
        .then((res)=>{
            const data=res.data;
            dispatch(changeList(data.data))
        })
        .catch(()=>{
            console.log('error')
        })
    }
}