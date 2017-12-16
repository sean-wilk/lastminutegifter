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
         <ReactCSSTransitionGroup
         className="whiteBox row align-items-center"
         component="div"
         transitionName="text"
         transitionEnterTimeout={600}
         transitionLeaveTimeout={10}
         >
            <div key={props.questionId} className="questionParent">
              <Question content={props.question} />
            </div>
          </ReactCSSTransitionGroup>
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
