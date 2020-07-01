import axios from 'axios'
import {actionType} from './index'
import {fromJS} from 'immutable'
const ChangeHomeData=(res)=>({
        type:actionType.CHANGE_HOME_DATA,
        articleList:res.articleList

})
const addHomeList=(data)=>({
    type:actionType.ADD_HOME_LIST,
    data:fromJS(data)
})
export const getHomeInfo=()=>{
    return (dispatch)=>{
        axios.get('/api/home.json')
        .then((res)=>{
            const data=res.data.data
            const action=ChangeHomeData(data)
             dispatch(action);
        })
    }
}
export const getMoreList=()=>{
    return (dispatch)=>{
         axios.get('/api/homeList.json')
         .then((res)=>{
             const data=res.data.data.articleList;
             console.log(data)
             dispatch(addHomeList(data))
         })
    }
}
export const toggleTopShow=(show)=>({
    type:actionType.TOGGLE_SCROLL_SHOW,
    show
})