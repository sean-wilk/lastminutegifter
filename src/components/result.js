import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function refreshPage(){
    window.location.reload();
}

function Result(props) {

  return (
    <div>
      <ReactCSSTransitionGroup
        className="container result"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div className="resultImage row align-items-center">
          {console.log(props.imgSrc)}
          <img id="resultImg" src={props.imgSrc} alt={props.quizResult}></img>
        </div>
        <div className="resultText">
          <h2><strong>{props.quizResult}</strong></h2>
          <p>{props.resultDescription}</p>
        </div>
      </ReactCSSTransitionGroup>
      <div className="buttonsGroup">
        <button
          type="button"
          className="btn btn-outline-primary btn-lg result-btn"
          name="radioGroup"
          id="buy-btn">
          <a href={props.shopLink}>Buy</a>
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
          Share
        </button>
      </div>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
  resultDescription: PropTypes.string.isRequired,
  imgSrc: PropTypes.object.isRequired,
  shopLink: PropTypes.string.isRequired
};

export default Result;
