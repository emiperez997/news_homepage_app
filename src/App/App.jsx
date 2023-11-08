import { MainNew } from "../MainNew/MainNew";
import { Nav } from "../Nav/Nav";
import { SectionNew } from "../SectionNew/SectionNew";
import { TopNews } from "../TopNews/TopNews";
import { Wrapper } from "../Wrapper/Wrapper";
import "./App.css";

function App() {
  return (
    <Wrapper type="column">
      <Nav></Nav>

      <Wrapper type="responsive">
        <MainNew></MainNew>

        <SectionNew></SectionNew>
      </Wrapper>
      <TopNews></TopNews>
    </Wrapper>
  );
}

export default App;
