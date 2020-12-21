import React from "react";
import "../../components/FinishedQuiz/FinishedQuiz.css";
import Button from '../../components/UI/Button/Button'
import {Link} from 'react-router-dom'

const FinishedQuiz = (props) => {
   const successCount = Object.keys(props.results).reduce((total,key)=>{
      if (props.results[key] === 'success'){
          total++
      }
      return total
   },0)

  return (
    <div className="FinishedQuiz">
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            "fa",
            props.results[quizItem.id] === "error" ? "fa-times" : "fa-check",
            props.results[quizItem.id] === "error" ? "error" : "success",
          ];

          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}

        <p>Правильно {successCount} из {props.quiz.length}</p>
        <div>
          <Button onClick={props.onRetry} type="primaryButton">Повторить</Button>
          <Link to="/">
            <Button type="successButton">Перейти в список тестов</Button>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default FinishedQuiz;
