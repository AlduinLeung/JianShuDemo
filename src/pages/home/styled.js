import styled from 'styled-components'


export const HomeWrapper=styled.div`  
overflow:hidden;
width:960px;
margin: 0 auto;
`;

export const HomeLeft=styled.div`
width:625px;
padding-top:30px; 
margin-left:15px;
float:left;
.banner-img{
    width:625px;
    height:270px;
}
`
export const HomeRight=styled.div`
width:280px;
float:right;
`
export const ListItem=styled.div`
overflow:hidden;
margin-top:40px;
padding:20px 0;
border-bottom:1px solid #dcdcdc;
.pic{
    width:125px;
    height:100px;
    display:block;
    float:right;
    border-radius:10px;
}

`
export  const ListInfo=styled.div`
width:500px;
float:left;
.title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
    color:#333;
}
.desc{
    font-size:13px;
    line-height:24px;
    color:#999;
}
`
export const RecommendWrapper=styled.div`
margin:30px 0;
width:280px;
`
export const RecommendItem=styled.div`
width:280px;
height:50px;
background:url(${(props)=>props.imgUrl});
background-size:contain;
margin-bottom:5px;
`
export const LoadMore=styled.div`
width:100%;
height:40px;
line-height:40px;
text-align:center;
background:#a5a5a5;
margin: 30px 0;
border-radius:20px;
color:#fff;
cursor: pointer;
`
export const BackTop=styled.div`
position:fixed;
right:30px;
bottom:30px;
width:60px;
height:60px;
line-height:60px;
text-align:center;
border:solid 1px #ccc;
font-size:14px;
background-color:red;
border-radius:10px;
`