import React from "react";
import styled from "styled-components";

const StyledView = styled.div`
  background-color: #155263;
  padding: 10px;
  font-size: 20px;
  color: #ffc93c;
  margin: 5px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  background-color: #155263;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #ff6f3c;
  border-radius: 3px;
  width: 10em;
  margin-left: auto;
  margin-right: auto;
  color: #ffc93c;

  &:hover {
    background-color: #ff9a3c;
  }
`;

const StyledTextArea = styled.textarea`
  width: 200px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  text-align: centre;
  font-size: 20px;
`;

export default function Quadratic() {
  const [coefficents, setCoefficents] = React.useState([1, 2, 1]);
  const [userAnswer, setAnswer] = React.useState("( x + )( x + )");
  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [correctAnswer, setCorrectAnswer] = React.useState("(x+1)(x+1)");

  function newQuestion() {
    /* y = ax^2 + bx + c = (dx + e)(fx + g) */
    let d = Math.floor(Math.random() * 3) + 1;
    let e = Math.floor(Math.random() * 11) - 5;
    let f = Math.floor(Math.random() * 3) + 1;
    let g = Math.floor(Math.random() * 11) - 5;
    let a = d * f;
    let b = d * g + e * f;
    let c = e * g;
    let solution = `(${d}x+${e})(${f}x+${g})`
      .replace(/\+\-/g, "-")
      .replace(/1x/, "x");
    setCorrectAnswer(solution);
    setCoefficents([a, b, c]);
    setCorrect(false);
    setIncorrect(false);
    setAnswer("( x + )( x + )");
  }

  const checkAnswer = () => {
    let reordedAnswer = "";
    setAnswer((prevAnswer) =>
      prevAnswer.replace(/ /g, "").replace(/\+\-/g, "-").replace(/1x/, "x")
    );
    reordedAnswer = userAnswer.split(")(");
    let reordedUserAnswer = "(" + reordedAnswer[1] + reordedAnswer[0] + ")";
    if (userAnswer == correctAnswer || correctAnswer == reordedUserAnswer) {
      setCorrect(true);
      setIncorrect(false);
    } else setIncorrect(true);
    console.log("correctAnswer " + correctAnswer);
    console.log("reorded user answer " + reordedUserAnswer);
    console.log("user answer " + userAnswer);
    console.log("correct " + correct);
    console.log("incorrect " + incorrect);
  };

  function handleAnswerChange(event) {
    setAnswer(event.target.value);
  }

  let firstSign = "";
  if (coefficents[1] >= 0) {
    firstSign = "+";
  } else {
    firstSign = "";
  }

  let secondSign = "";
  if (coefficents[2] >= 0) {
    secondSign = "+";
  } else {
    secondSign = "";
  }
  return (
    <StyledView>
      <h3>Factorise</h3>

      <span>
        {`${coefficents[0] != 1 ? coefficents[0] : ""}x`}
        <sup>2</sup>
        {`${firstSign} ${
          coefficents[1] != 1 ? coefficents[1] : ""
        }x ${secondSign} ${coefficents[2]} = 0`}
      </span>

      <StyledTextArea
        value={userAnswer}
        onChange={handleAnswerChange}
      ></StyledTextArea>

      <StyledButton onClick={checkAnswer}>Check answer</StyledButton>

      <StyledButton onClick={newQuestion}>New Question</StyledButton>

      <span>
        {correct ? "Well done!" : ""}
        {incorrect ? "Try again!" : ""}
      </span>
    </StyledView>
  );
}
