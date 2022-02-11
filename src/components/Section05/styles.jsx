import styled from 'styled-components'
import { darken } from 'polished'


export const Wrapper = styled.div`
width: 100vw;
background-color: #fff;
height: 534px;
padding: 80px;

`



export const Container = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
max-width: 1140px;
margin: 0 auto;


.preco {
  padding: 10px;
  max-width: 544px;
  height:370px;
  border: 3px solid black;
  border-radius: 10px;
  color:#2a2b31;

  h5{
    font-weight: 700;
    font-size: 22px;
    text-align: center;
  }

  h5:nth-child(3){
    margin-top: -10px;
  }


  .preco-errado{
    text-align: center;
    margin-top: 30px;
  }

  .preco-errado span{
    color: #f31616;
    text-decoration: line-through;
  }

  img{
    display: block;
    margin: -20px auto 0 auto;
  }

  button{
    background-color:RGB(67, 255, 255);
    width: 410px;
    height: 52px;
    border-radius: 5px;
    border: none;
    margin: 0 auto;
    display: block;
    font-size: 18px;
    font-weight: 800;
    margin-top: 10px;
    transition: all .2s;

    :hover{
      background-color: ${darken(.2 , "#43ffff")}
    }
  }

}



@media(max-width:1180px) {
  padding: 4rem 2rem;
}

@media(max-width: 780px) {
  > div {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-row-gap: 2em;
    
    .item {
      width: 70%;
    }
  }
}
`
