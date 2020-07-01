import {actionType} from './index'
import {fromJS} from 'immutable'
const defaultState=fromJS({    //用immutable包装成immutable
    articleList:[],
    showScroll:false,
    // articleList:[{
    //     id:1,
    //     title:'《浮生六记》：想把我一生的温柔都说与你听',
    //     desc:'初遇沈复，是在初中的语文课本里。那时的他，充满童真童趣。在他眼里，夏日令人烦心的蚊子也如仙鹤舞空般灵动，看两只小虫打架也如观古代武将马上单挑般津...',
    //     imgUrl:'https://upload-images.jianshu.io/upload_images/7042805-3119ddc0df3451fb?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    // },{
    //     id:2,
    //     title:'《浮生六记》：想把我一生的温柔都说与你听',
    //     desc:'初遇沈复，是在初中的语文课本里。那时的他，充满童真童趣。在他眼里，夏日令人烦心的蚊子也如仙鹤舞空般灵动，看两只小虫打架也如观古代武将马上单挑般津...',
    //     imgUrl:'https://upload-images.jianshu.io/upload_images/7042805-3119ddc0df3451fb?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    
    // },{
    //     id:3,
    //     title:'《浮生六记》：想把我一生的温柔都说与你听',
    //     desc:'初遇沈复，是在初中的语文课本里。那时的他，充满童真童趣。在他眼里，夏日令人烦心的蚊子也如仙鹤舞空般灵动，看两只小虫打架也如观古代武将马上单挑般津...',
    //     imgUrl:'https://upload-images.jianshu.io/upload_images/7042805-3119ddc0df3451fb?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
   
    // },{
    //     id:4,
    //     title:'《浮生六记》：想把我一生的温柔都说与你听',
    //     desc:'初遇沈复，是在初中的语文课本里。那时的他，充满童真童趣。在他眼里，夏日令人烦心的蚊子也如仙鹤舞空般灵动，看两只小虫打架也如观古代武将马上单挑般津...',
    //     imgUrl:'https://upload-images.jianshu.io/upload_images/7042805-3119ddc0df3451fb?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
   
    // }]
})
 
export default(state=defaultState,action)=>{      //这里reducer导出的是纯函数
    switch(action.type){
        case actionType.CHANGE_HOME_DATA:
          return   state.set("articleList",fromJS(action.articleList))
        case actionType.ADD_HOME_LIST:
            return state.set('articleList',state.get('articleList').concat(action.data))
        case actionType.TOGGLE_SCROLL_SHOW:
            console.log(action.show)
            return state.set('showScroll',action.show)
        default:
            return state; 
    }
    
 
 
} 