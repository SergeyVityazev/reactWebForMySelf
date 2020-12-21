import React from "react";
import Layout from "./hoc/Layout/Layout.js";
import Quiz from './contaeiners/Quiz/Quiz'
import QuizList from "./contaeiners/QuizList/QuizList";
import QuizCreator from "./contaeiners/QuizCreator/QuizCreator";
import Auth from "./contaeiners/Auth/Auth";
import {Route, Switch} from 'react-router-dom'
 

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" component={QuizList} />
        </Switch>
      </Layout>
    );
  }
}

export default App;

