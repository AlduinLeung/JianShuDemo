import React,{Component}from 'react'
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

class Header extends Component{
    getListArea(){
    const {page,totalpage}=this.props;
    const newList=this.props.list.toJS();
    const PageList=[];
    for(let i=(page-1)*10;i<page*10;i++){
        PageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
    }
        if(this.props.focused||this.props.mouseIn){
            return(
                <SearchInfo 
                onMouseEnter={this.props.handleMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}
                > 
                <SearchInfoTitle>
                热门搜索
                <SearchSwitch onClick={()=>{this.props.handleChangePage(page,totalpage)}}>换一换</SearchSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {PageList}
                </SearchInfoList>
            </SearchInfo>
            )
        }else{
            return null
        }
    }
    render(){
        return(
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
            in={this.props.focused}     //csstransition 会不定时的向里面添加class
            classNames="slide"
            >
            <NavSearch  
            className={this.props.focused ? 'focused':''}
            onFocus={()=>this.props.handleInputFoucus(this.props.list)}
            onBlur={this.props.handleInputBlur}
            >
            </NavSearch>
            </CSSTransition>
            <span className={this.props.focused ? 'focused iconfont':'iconfont'}>&#xe60c;</span>
            {this.getListArea()}  
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
}
 
 


//隐藏SearchArea
// const getListArea=(show)=>{
   
// }

       

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
          focused:state.getIn(['header','focused']), //从store里取出的数据
          list:state.getIn(['header','list']),   //从store中拿到的list数据
          page: state.getIn(['header','page']), ////从store中拿到page的数据，page在store里进行了分页
          mouseIn:state.getIn(['header','mouseIn']),
          totalpage:state.getIn(['header','totalpage'])
    }
} 
const mapDispatchToProps=(dispatch)=>{       //派发action
    return{
        handleInputFoucus(list){
            // const action=actionCreators.searchFocus();
            // const action={
            //     type:'search_focus'    
            // }
            console.log(list) //通过观察可以发现经过渲染以后的list的值会发生变化
            if(list.size===0){
                dispatch(actionCreators.getList())  //ajax
            }
            
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
        //    const action={
        //        type:'search_blur',
        //    };
           dispatch(actionCreators.searchBlur());   ///引入以后的action就可以不用写了，直接使用actionCreators的方法就行
                                                    //另外，在actionCreators里返回的也是一个对象
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalpage){     //实现搜索框热词的切换功能
            if(page<totalpage){
                dispatch(actionCreators.changePage(page+1)) //如果当前的页码小于总页码，则点击切换下一页，page+1，如果已经是最后一页的话，就直接跳转到第一页
            }else{
                dispatch(actionCreators.changePage(1))
            }
            
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)