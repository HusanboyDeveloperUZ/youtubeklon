import styled from "styled-components";



export const Container = styled.div`
background: #212121;
width: 280px;
height: calc(100vh - 80px );
padding: 12px 0px;
position: sticky;
top: 80px;

.fozil{
    width: 30px;
    height: 30px;
}
`

export const Wrap = styled.div`
width: 100%;
display: flex;
align-items: center;
padding:15px 0px 15px 28px;
cursor: pointer;
margin-bottom: ${({isHr})=>isHr && '25px'};
padding-bottom: ${({isHr})=>isHr && '30px'};
border-bottom: ${({isHr})=> isHr && ' 3px solid rgba(255, 255, 255, 0.2);'};

:hover{
    background: rgba(255, 255, 255, 0.2);
}
`

Wrap.Title = styled.div`
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 20px;
color: #FFFFFF;
margin-left: 32px ;
cursor: pointer;
`