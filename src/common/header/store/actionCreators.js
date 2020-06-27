//使用actionCreators来避免程序出错
//然后可以使用常量来继续拆分
//这里要记得拆分了以后还要去reducer那边去修改，因为reducer还是之前的常量
import * as actionTypes from './actionTypes.js'
 export const searchFocus=()=>({
     type:actionTypes.SEARCH_FOCUS   
 });
 export const searchBlur=()=>({
     type: actionTypes.SEARCH_BLUR
 })  