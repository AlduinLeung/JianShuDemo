//index做成组件的出口，引入以后就可以直接导出，在header里可以直接使用导出
import  * as actionCreators  from './actionCreators'
import reducer from './reducer'
import * as actionTypes from './actionTypes';
export {reducer,actionCreators,actionTypes};