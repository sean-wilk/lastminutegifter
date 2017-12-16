import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function refreshPage(){
    window.location.reload();
}

function handleSearch(url) {
   window.open(url, "_blank");
 }

function Result(props) {

  return (
    <div>
      <ReactCSSTransitionGroup
        className="whiteBox row align-items-center"
        component="div"
        transitionName="text"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={10}
        >
        <div className="resultImage row align-items-center">
          <img id="resultImg" src={props.imgSrc} alt={props.quizResult}></img>
        </div>
        <div className="resultText">
          <div className="resultCopy">
            <h3>{props.quizResult}</h3>
            <p>{props.resultDescription}</p>
          </div>
        </div>
      </ReactCSSTransitionGroup>
      <div className="buttonsGroup">
        <button
          type="button"
          className="btn btn-outline-primary btn-lg result-btn"
          name="radioGroup"
          id="buy-btn"
          onClick={() => handleSearch(props.shopLink)}>
          Buy Now
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
          id="share-btn"
          onClick={() => handleSearch('https://www.facebook.com/sharer/sharer.php?u=http://secretsanta.barkernyc.com/')}>
          Share This Quiz
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
