import styled from 'styled-components'


export const Wrapper = styled.div`
  width: 100vw;
  background-color: #fff;
`
export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
  padding: 5rem 0;
  
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;


    .preco {
      border: 1px solid black;
      border-radius: 12px;
      width: 100%;
      height: 350px;
      box-shadow: 0 0 30px 0 rgb(0 0 0 / 20%);
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
