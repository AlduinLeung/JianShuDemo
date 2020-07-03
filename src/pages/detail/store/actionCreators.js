import axios from 'axios'
import {actionType} from './index'
const changeDetail=(title,content)=>({
    type:actionType.CHANGE_DETAIL,
    title,
    content,
})
export const getDetail=(id)=>{
    return (dispatch)=>{
        axios.get('/api/Detail.json?id='+id)
        .then((res)=>{
            const data=res.data.data;
            dispatch(changeDetail(data.title,data.content));
        })
    }
}