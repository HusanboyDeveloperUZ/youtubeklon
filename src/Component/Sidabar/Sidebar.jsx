import React from 'react'
import { sidebarData } from '../../mock/sidebar'
import {Container, Wrap} from './style'


export const Sidebar = () => {
  return (
    <Container>
       {
        sidebarData.map((value)=>{
          return(
            <Wrap isHr={value.hidden}  key={value.id}>
              <value.icons className='fozil'/>
             <Wrap.Title>{value.title}</Wrap.Title>
            </Wrap>
          )
        })
       }
    </Container>
  )
}
export default Sidebar