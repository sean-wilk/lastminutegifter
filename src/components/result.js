import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function refreshPage(){
    window.location.reload();
}

function Result(props) {

  return (
    <div>
      <div className="whiteBox result">
        <div className="resultImage row align-items-center">
          {console.log(props.imgSrc)}
          <img id="resultImg" src={props.imgSrc} alt={props.quizResult}></img>
        </div>
        <div className="resultText">
          <div className="resultCopy">
            <h3>{props.quizResult}</h3>
            <p>{props.resultDescription}</p>
          </div>
        </div>
      </div>
      <div className="buttonsGroup">
        <button
          type="button"
          className="btn btn-outline-primary btn-lg result-btn"
          name="radioGroup"
          id="buy-btn">
          <a href={props.shopLink} target="_blank">Buy Now</a>
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn-lg result-btn"
          name="radioGroup"
          id="restart-btn"
          onClick={() => refreshPage()}>
          Restart
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn-lg result-btn"
          name="radioGroup"
          id="share-btn">
          <a href="https://www.facebook.com/sharer/sharer.php?u=http://secretsanta.barkernyc.com/" target="_blank">Share This Quiz</a>
        </button>
      </div>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
  resultDescription: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  shopLink: PropTypes.string.isRequired
};

export default Result;
