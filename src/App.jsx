import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header.jsx";
import FactoriseQuadratic from "./components/FactorisingQuadratic.jsx";
import SingleBracketFactorise from "./components/SingleBracket.jsx";
import SolvingLinear from "./components/SolvingLinear.jsx";

const StyledBody = styled.div`
  color: #ac5293;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function App() {
  const [count, setCount] = React.useState(0);
  const onUpdateCount = (newCount) => {
    setCount(newCount);
  };

  return (
    <>
      <Header />
      <StyledBody>
        <div style={{ marginLeft: "10px" }}>Correct answers: {count}</div>
        <StyledContainer>
          <FactoriseQuadratic count={count} onUpdateCount={onUpdateCount} />
          <SingleBracketFactorise count={count} onUpdateCount={onUpdateCount} />
          <SolvingLinear count={count} onUpdateCount={onUpdateCount} />
        </StyledContainer>
      </StyledBody>
    </>
  );
}

export default App;
