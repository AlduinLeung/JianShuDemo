import React, { Component } from 'react'
import Header from './common/header/header'
import store from './store/index'
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home/home'
import Detail from './pages/detail/detail'
class App extends Component{
  render(){
    return( 
    <Provider store={store}>
    <div>
       <Header/>
       <BrowserRouter>
        <div>
        {/* 这里要注意路径匹配的问题，当访问"/detail"的时候，实际上也会和"/"进行路径匹配 */}
        {/* exact属性，这个属性的意思就是精准匹配uri，意思就是uri必须和path是一样的才能匹配到对应的内容 */}
        {/* 喷了，这里居然大小写敏感 */}
        <Route path='/detail' exact component={Detail}></Route>   
        <Route path='/'  exact component={Home}></Route>
         
         </div>
       </BrowserRouter>
       </div>
    </Provider>
    )}
}
export default App;
