import React from "react";
import "../../components/ActiveQuiz/ActiveQuiz.css";
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = (props) => (
  <div className="ActiveQuiz">
    <p className="Question">
      <span>
        <strong>{props.activeNumber}.</strong>&nbsp;
        {props.question}
      </span>
      <small>
        {props.activeNumber} из {props.quizLenght}
      </small>
    </p>

    <AnswerList
      state={props.state}
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
    />
  </div>
);

export default ActiveQuiz;
