import React,{PureComponent} from 'react'
import {ListItem,ListInfo,LoadMore} from '../styled'
import {connect} from 'react-redux'
import {actionCreators} from '../store/index'
import {Link} from 'react-router-dom'
class List extends PureComponent{
    render(){
        const {articleList}=this.props
        return(
     <div> 
     
          { articleList.map((item)=>{
             return(
                 <Link key={item.get('id')} to={'/detail/'+item.get('id')}>
                <ListItem >
                 <img className="pic" src={item.get('imgUrl')} alt="120" referrerPolicy="no-referrer" />
                   <ListInfo>
                   <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                   </ListInfo>
                 </ListItem>
                 </Link>
             )
         }) 
          }
          <LoadMore onClick={this.props.getMoreList}>更多文字</LoadMore>
          </div>)
    }
} 

const mapState=(state)=>({
    articleList:state.getIn(['home','articleList'])
})
const mapDispatch=(dispatch)=>({
    getMoreList(){
        dispatch(actionCreators.getMoreList())
    }
})
export default connect(mapState,mapDispatch)(List)