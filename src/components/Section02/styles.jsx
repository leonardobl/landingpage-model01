import styled from 'styled-components'


export const Wrapper = styled.div`
  width: 100vw;
  background: #f0efef; 
`
export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
  padding: 5rem 0;

  > h3 {
    margin-bottom: 2rem;
  }

  .item {
    display: flex;
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
    gap: 2rem;

    div {
      width: 100%; 
      display: flex;    
      align-items: center;
      align-items: center;
      max-width: 300px; 
      text-align: left;
      /* line-height: ; */
      

      h1 {
        font-size: 4rem;
        color: #26c0c0;
        margin-right: 1rem;
      }

      p {
        font-size: 18px;
        font-weight: 600;
      }
      /* background: yellow; */
    }
  }

  @media(max-width:1180px) {
    padding: 3rem 2rem;
  }

  @media(max-width: 670px) {
    .item {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`