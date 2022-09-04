import React  from 'react'
import { useContext } from 'react'
import { FozilInfo } from '../../contex'
import {Card, Container} from './style'


export const Body = () => {
  const [data, setData] = useContext(FozilInfo)
  return (
   <Container>
    {
    data.map((value)=>{
      return(
        <Card key={value.id}>
          <Card.Img src={value.url}/>
          <Card.Title>{value.name}</Card.Title>

        </Card>
      )
    })

    }

   </Container>
  )
}
export default Body