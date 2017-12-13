import React, { Component } from 'react';
import update from 'react-addons-update';

import Quiz from './components/quiz';
import quizQuestions from './api/quiz-questions';
import Result from './components/result';

import logo from './logo.svg';
import './App.css';


class App extends Component {

    constructor(props) {
    super(props);

    var cloneArray = quizQuestions.slice();
    cloneArray.splice(0,1);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Nintendo: 0,
        Microsoft: 0,
        Sony: 0
      },
      result: '',
      resultImage: '',
      resultLink: '',
      resultOptions:[],
      under20Flag: 0,
      over20Flag: 0,
      randomQuestions: this.shuffleArray(cloneArray)
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const AnswerOptions = quizQuestions.map((question) => question.answers);
    const ResultOptions = quizQuestions.map((question) => question.result);

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: AnswerOptions[0],
      resultOptions: ResultOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });
    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.state.randomQuestions[counter-1].question,
      answerOptions: this.state.randomQuestions[counter-1].answers,
      resultOptions: this.state.randomQuestions[counter-1].result,
      answer: ''
    });
  }

   setResults (result) {
     if (this.state.under20Flag === 1) {
       console.log(this.state.resultOptions[0].image)
       this.setState({ resultImage: this.state.resultOptions[0].image });
       this.setState({ resultLink: this.state.resultOptions[0].link });
       this.setState({ result: this.state.resultOptions[0].item });
     } else {
       console.log(this.state.resultOptions[1].image)
       this.setState({ resultImage: this.state.resultOptions[1].image });
       this.setState({ resultLink: this.state.resultOptions[1].link });
       this.setState({ result: this.state.resultOptions[1].item });
     };
   }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (event.currentTarget.value === 'Gift') {
        setTimeout(() => this.setResults(this.state.resultOptions), 300);

      } else if (this.state.questionId === quizQuestions.length) {
        setTimeout(() => this.setResults(this.state.resultOptions), 300);

      }else if (event.currentTarget.value === 'Under20') {
        this.setState({ under20Flag: 1 });
        setTimeout(() => this.setNextQuestion(), 300);

      } else if (event.currentTarget.value === 'Over20') {
        this.setState({ over20Flag: 1 });
        setTimeout(() => this.setNextQuestion(), 300);

      } else {
        setTimeout(() => this.setNextQuestion(), 300);
      }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} imgSrc={this.state.resultImage} shopLink={this.state.resultLink } />
    );
  }

  render() {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React Quiz</h2>
          </div>
            {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>
      )
    }
}

export default App;