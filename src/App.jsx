import Section02 from "./components/Section02";
import Home from "./components/Home";
import Information from "./components/Information";
import Mais from "./components/Mais";
import { GlobalStyle } from "./styles/global";
import Section03 from './components/Section03/index';
import Section04 from "./components/Section04";
import Section05 from "./components/Section05";
import { Section06 } from "./components/Section06";

function App() {
  return (
    <>
      <Home />
      <Information />
      <Mais />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <GlobalStyle />
    </>
  );
}

export default App;
