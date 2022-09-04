import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Sidebar from "../Component/Sidabar/Sidebar";
import Category from "../Component/Category/Category";
import Body from "../Component/Body/Body";
import {Container} from './style'



export const Root = () => {
  return (
    <div style ={{width: '100%'}}>
      <Navbar />
      <Container>
        <Sidebar />
        <div>
          <Category />
          <Body />
        </div>
      </Container>
    </div>
  );
};
export default Root;
