import React,{Component} from 'react'
import {RecommendWrapper,RecommendItem} from '../styled'
import pic1 from '../../../statics/pic1.png'
import pic2 from '../../../statics/pic2.png'
import pic3 from '../../../statics/pic3.png'
import pic4 from '../../../statics/pic4.png'
class Recommend extends Component{
    render(){
        return(
            <div>
            <RecommendWrapper>
                <RecommendItem imgUrl={pic1}></RecommendItem>
                <RecommendItem imgUrl={pic2}></RecommendItem>
                <RecommendItem imgUrl={pic3}></RecommendItem>
                <RecommendItem imgUrl={pic4}></RecommendItem>
            </RecommendWrapper>
            </div>
        )
    }
}
export default Recommend