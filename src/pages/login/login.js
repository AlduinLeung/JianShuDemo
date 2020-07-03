import React,{Component} from 'react'
import {connect} from 'react-redux'
import {LoginWrapper,Loginbox,Input,Button} from './style'
import {actionCreators} from './store/index'
import {Redirect} from 'react-router-dom'
class Login extends Component{
    render(){
        const {loginStatus}=this.props
        console.log(loginStatus)
        if(!loginStatus){
            return (
                    <LoginWrapper>
                    <Loginbox>
                        <Input placeholder="账号" ref={(input)=>{this.account=input}}/>
                        <Input placeholder="密码" type='password' ref={(input)=>{this.password=input}}/>
                        <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
                    </Loginbox>
                    </LoginWrapper>
            )
        }else{
            return <Redirect to='/'/>
        }
}
}
const mapState=(state)=>({
    loginStatus:state.getIn(['login','login'])
})
const mapDispatch=(dispatch)=>({
    login(accountElem,passwordElem){   //上面jsx里已经拿到了input框中的input和password，这里通过dispatch方法传给login
        dispatch(actionCreators.login(accountElem,passwordElem))
    }

})
export default connect(mapState,mapDispatch)(Login)