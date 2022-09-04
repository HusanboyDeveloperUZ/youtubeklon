import styled from "styled-components";
// icon

import {ReactComponent as menu} from '../../assets/icons/menu.svg'
import {ReactComponent as logo} from '../../assets/icons/youtube.svg'
import {ReactComponent as search} from '../../assets/icons/search.svg'
import {ReactComponent as camera} from '../../assets/icons/camera.svg'
import {ReactComponent as toriburchak} from '../../assets/icons/toriburchak.svg'
import {ReactComponent as qongiroq} from '../../assets/icons/qongiroq.svg'
import {ReactComponent as rasm} from '../../assets/icons/rasm.svg'

export const Container = styled.div`
width: 100%;
height: 80px;
background: #212121;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 17px;
position: sticky;
top: 0;
`

export const Wrap = styled.div`
display: flex;
align-items: center; 
`
Wrap.menu = styled(menu)`
width: 30px;
height: 40px;
`
Wrap.logo = styled(logo)`
width: 110px;
height: 200px;
margin-left: 27px;
`

// input

export const InputContainer = styled.div`
display: flex;
`
InputContainer.Input =styled.input`
background: #000000;
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 2px 0px 0px 2px;
width: 550px;
height: 42px;
outline: none;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: rgba(255, 255, 255, 0.2);
padding: 0px 5px;
`

export const Flexing = styled.div`
background: rgba(255, 255, 255, 0.2);
border-radius: 0px 2px 2px 0px;
width: 85px;
height: 42px;
display: flex;
align-items: center;
justify-content: center;
`
Flexing.Search = styled(search)`
width: 27px;
height: 35px;
`

// thirt part 

export const Div =styled.div`
display: flex;
align-items: center;
`
Div.Camera =styled(camera)`
width: 70px;
height: 30px;
`
Div.Toriburchak = styled(toriburchak)`
width: 70px;
height: 35px;
`
Div.Qongiroq = styled(qongiroq)`
width: 70px;
height: 30px;
`
Div.Rasm = styled(rasm)`
width: 80px;
height: 45px;
`

