import axios from 'axios'
import {actionType} from './index'
const changeLogin=()=>({
    type:actionType.CHANGE_LOGIN,
    value:true
})


export const logout=()=>({
    type:actionType.LOGOUT,
    value:false
})
export const login=(account,password)=>{
 return (dispatch)=>{
    axios.get('/api/login.json?account='+account+'&password='+password)
    .then((res)=>{
        const result=res.data.data
        if(result){
            dispatch(changeLogin())
        }else{
            console.log('denglushubai')
        }
    })
 }
}