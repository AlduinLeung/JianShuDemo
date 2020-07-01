import React,{Component} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from  './store/index'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './styled.js'
import Recommend from './components/recommend'
import List from './components/List'
class Home extends Component{
    handleScrollTop(){
        window.scrollTo(0,0)
    }
    render(){
        return(
            <HomeWrapper>
            <HomeLeft>
            <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4986/33b9e72aff1e083dfb5aa7a1c8a427e53fdc1e9e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"></img>
            <List />
            </HomeLeft>
            <HomeRight>
            <Recommend />
            </HomeRight>
            {
                this.props.showScroll? <BackTop>回到顶部</BackTop>:null
            }
           </HomeWrapper>
        
            
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeTopScrollShow)
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeTopScrollShow)
    }
}
const mapState=(state)=>({
    showScroll:state.getIn(['home','showScroll']),
})
const mapDispatch=(dispatch)=>({     //用容器组件来做ajax请求
    changeHomeData(){
        const action=actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeTopScrollShow(){
        if(document.documentElement.scrollTop>100){ //滚动的距离>400的时候
            dispatch(actionCreators.toggleTopShow(true))
     }else{
        dispatch(actionCreators.toggleTopShow(false))
     }  
    }
})
export default connect(mapState,mapDispatch)(Home)