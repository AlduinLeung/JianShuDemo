import React from 'react'
import {GlobalStyle} from '../../statics/iconfont/iconfont.js'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchSwitch,
    SearchInfoItem,
    SearchInfoList,

} from './style'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux';
import {actionCreators} from './store/index'

//隐藏SearchArea
const getListArea=(show)=>{
    if(show){
        return(
            <SearchInfo>
            <SearchInfoTitle>
            热门搜索
            <SearchSwitch>换一换</SearchSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            </SearchInfoList>
        </SearchInfo>
        )
    }else{
        return null
    }
}

const Header=(props)=>{
        return (
        <HeaderWrapper>
        <GlobalStyle/>
        <Logo href='./'/>
        <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载app</NavItem>
        <SearchWrapper>
        {/* 用CSSTransition在外部包裹，实现动画效果 */}
        <CSSTransition
        timeout={200}
        in={props.focused}     //csstransition 会不定时的向里面添加class
        classNames="slide"
        >
        <NavSearch  
        className={props.focused ? 'focused':''}
        onFocus={props.handleInputFoucus}
        onBlur={props.handleInputBlur}
        >
        </NavSearch>
        </CSSTransition>
        <span className={props.focused ? 'focused iconfont':'iconfont'}>&#xe60c;</span>
        {/* 这里是热门搜索 */}
        {/* <SearchInfo>
            <SearchInfoTitle>
            热门搜索
            <SearchSwitch>换一换</SearchSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            </SearchInfoList>
        </SearchInfo> */}
        {/* 这里的设计思路是当聚焦时，搜索框弹出 */}
        {getListArea(props.focused)}  
        </SearchWrapper>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'> </NavItem>
        </Nav>
        <Addition>
        <Button className='writing'><span className="iconfont">&#xe615;</span>写文章</Button>
        <Button className='reg'>注册</Button>
        </Addition>
        
        </HeaderWrapper>)
}
// class Header extends Component{
//     // constructor(props){    当把state保存到store中的时候，constructor没有存在的价值
//     //     super(props);
//     //     this.handleInputFoucus=this.handleInputFoucus.bind(this)
//     //     this.handleInputBlur=this.handleInputBlur.bind(this)
//     // } 
//     render(){
//         return <HeaderWrapper>
//         <GlobalStyle/>
//         <Logo href='./'/>
//         <Nav>
//         <NavItem className='left active'>首页</NavItem>
//         <NavItem className='left'>下载app</NavItem>
//         <SearchWrapper>
//         {/* 用CSSTransition在外部包裹，实现动画效果 */}
//         <CSSTransition
//         timeout={200}
//         in={this.props.focused}     //csstransition 会不定时的向里面添加class
//         classNames="slide"
//         >
//         <NavSearch  
//         className={this.props.focused ? 'focused':''}
//         onFocus={this.props.handleInputFoucus}
//         onBlur={this.props.handleInputBlur}
//         >
//         </NavSearch>
//         </CSSTransition>
//         <span className={this.props.focused ? 'focused iconfont':'iconfont'}>&#xe60c;</span>
//         </SearchWrapper>
//         <NavItem className='right'>登录</NavItem>
//         <NavItem className='right'> </NavItem>
//         </Nav>
//         <Addition>
//         <Button className='writing'><span className="iconfont">&#xe615;</span>写文章</Button>
//         <Button className='reg'>注册</Button>
//         </Addition>
        
//         </HeaderWrapper>
//     }
//     //搜索框聚焦时，把focused置为true
//     // handleInputFoucus(){
//     //     this.setState({
//     //         focused:true,
//     //     })
//     // }
//     //搜索框失焦时，把focused置为false
//     // handleInputBlur(){
//     //     this.setState({
//     //         focused:false,
//     //     }) 
//     // }

// }


const mapStateToProps=(state)=>{     //store里的数据映射到props上面
    return{ 
          // focused:state.header.focused  当使用了immutable.js以后，不可以这么直接使用数据
          //  focused: state.get('header').get('focused')
          focused:state.getIn(['header','focused'])
    }
} 
const mapDispatchToProps=(dispatch)=>{       //派发action
    return{
        handleInputFoucus(){
            // const action=actionCreators.searchFocus();
            // const action={
            //     type:'search_focus'    
            // };
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
        //    const action={
        //        type:'search_blur',
        //    };
           dispatch(actionCreators.searchBlur());   ///引入以后的action就可以不用写了，直接使用actionCreators的方法就行
                                                    //另外，在actionCreators里返回的也是一个对象
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)