import styled from "styled-components";


export const ContainerStyled = styled.div`
min-height: 575px;
background-color: #f3f3f3;




`;





export const WrapperStyled = styled.div`
min-height: 575px;
max-width: 1140px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr;




.div-selo{
  line-height: 575px;
  min-height: 575px;
  display: flex;
  
  svg{
    margin: auto;
    display: block;
  }
}



.div-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h1{
    font-size: 36px;
    font-weight: 800;
  }
  
  h2{
    font-size: 20px;
    font-weight: 700;
  }
  
  h1, h2{
    margin-bottom: 20px;
  }
  
  p{
    line-height: 30px;
    font-size: 18px;
  }
}

`;