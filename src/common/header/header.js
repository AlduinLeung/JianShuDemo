import React,{Component} from 'react'
import {GlobalStyle} from '../../statics/iconfont/iconfont.js'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper
} from './style'
import {CSSTransition} from 'react-transition-group'
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            focused:false,
        }
        this.handleInputFoucus=this.handleInputFoucus.bind(this)
        this.handleInputBlur=this.handleInputBlur.bind(this)
    } 
    render(){
        return <HeaderWrapper>
        <GlobalStyle/>
        <Logo href='./'/>
        <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载app</NavItem>
        <SearchWrapper>
        {/* 用CSSTransition在外部包裹，实现动画效果 */}
        <CSSTransition
        timeout={200}
        in={this.state.focused}   
        classNames="slide"
        >
        <NavSearch  
        className={this.state.focused ? 'focused':''}
        onFocus={this.handleInputFoucus}
        onBlur={this.handleInputBlur}
        >
        </NavSearch>
        </CSSTransition>
        <span className={this.state.focused ? 'focused iconfont':'iconfont'}>&#xe60c;</span>
        </SearchWrapper>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'> </NavItem>
        </Nav>
        <Addition>
        <Button className='writing'><span className="iconfont">&#xe615;</span>写文章</Button>
        <Button className='reg'>注册</Button>
        </Addition>
        
        </HeaderWrapper>
    }
    //搜索框聚焦时，把focused置为true
    handleInputFoucus(){
        this.setState({
            focused:true,
        })
    }
    //搜索框失焦时，把focused置为false
    handleInputBlur(){
        this.setState({
            focused:false,
        })
    }
} 
export default Header