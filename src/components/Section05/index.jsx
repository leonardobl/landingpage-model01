import * as S from './styles'
import precoBig from "../../assets/preco-big.svg"

const Section05 = () => {
  return (
    <S.Wrapper>
      <S.Container>
    
        <div>
          <h1>
            Você vai receber
            todo esse conteúdo:
          </h1>
          <div>
            <p>
              + de 100 aulas sobre Ableton Live Essencial
            </p>
          </div>
    
          <div>
            <p>
              <strong>Bônus</strong>: Edição no MELODYNE
              De: R$ 106,00 por R$0,00
            </p>
          </div>
    
          <div>
            <p>
              <strong>Bônus</strong>: Básico do MAINSTAGE
              De: R$ 147,00 por R$0,00
            </p>
          </div>
    
          <div>
            <p>
              <strong>Bônus</strong>: Básico do MAINSTAGE
              De: R$ 147,00 por R$0,00
            </p>
          </div>
        </div>
    
        <div className='preco'>
          <h5 className='preco-errado'>De <span>R$1197,00</span> por APENAS:</h5>
          <img src={precoBig} alt="preço" />
          <h5>Ou à vista por R$ 297,00</h5>
          <button>Sim! Eu quero dominar o Ableton Live</button>
        </div>
    
      </S.Container>
    </S.Wrapper>
    )
  }
  
  export default Section05;