import React from 'react';
import PropTypes from 'prop-types';

  function AnswerOption(props) {
    return (
        <button
          type="button"
          className="btn btn-outline-primary btn-lg answer-btn"
          name="radioGroup"
          checked={props.answerType === props.answer}
          id={props.answerType}
          value={props.answerType}
          disabled={props.answer}
          onClick={props.onAnswerSelected} >
          {props.answerContent}
        </button>
    );
  }

  AnswerOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };

  export default AnswerOption;
