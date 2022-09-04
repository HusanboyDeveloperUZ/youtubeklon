import React from 'react'
import {useState} from 'react'
import {createContext } from 'react'
import { cardData } from './mock/data'

export const FozilInfo = createContext()

export const Context = ({children}) => {

  const [data, setData] = useState(cardData)
  return (
    <FozilInfo.Provider value={[data, setData]}>{children}</FozilInfo.Provider>
  )
}
export default Context
