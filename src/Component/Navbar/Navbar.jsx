import React from "react";
import { useContext } from "react";
import { FozilInfo } from "../../contex";
import { Container, Div, Flexing, InputContainer, Wrap } from "./style";
import { cardData } from "../../mock/data";

export const Navbar = () => {
  const [data, setData] = useContext(FozilInfo)

  const getSearch = (e) =>{
    if(e.key == 'Enter'){

      const newData = cardData.filter((value)=> value.name.toUpperCase().includes(e.target.value.toUpperCase()))
      setData(setData)
    }
  }
  return (
    <Container>
      <Wrap>
        <Wrap.menu />
        <Wrap.logo />
      </Wrap>
      {/* input */}
      <InputContainer>
        <InputContainer.Input onKeyDown={getSearch} type={"text"} placeholder="Search" />
      <Flexing>
        <Flexing.Search />
      </Flexing>
      </InputContainer>
      {/* thirt part */}

      <Div>
        <Div.Camera />
        <Div.Toriburchak />
        <Div.Qongiroq />
        <Div.Rasm />
      </Div>
    </Container>
  );
};
export default Navbar;
