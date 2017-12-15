import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Question from '../components/question';
import AnswerOption from '../components/answer-option';

function Quiz(props) {

    function renderAnswerOptions(key) {
       return (
         <AnswerOption
           key={key.content}
           answerContent={key.content}
           answerType={key.type}
           answer={props.answer}
           questionId={props.questionId}
           onAnswerSelected={props.onAnswerSelected}
         />
       );
      }

      return (
       <div>
          <div class="whiteBox row align-items-center">
            <div key={props.questionId} className="questionParent">
              <Question content={props.question} />
            </div>
          </div>
          <div className="buttonsGroup">
            {props.answerOptions.map(renderAnswerOptions)}
          </div>
       </div>
     );
  }

  Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };

  export default Quiz;
