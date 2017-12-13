import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

  function Result(props) {
    return (
      <ReactCSSTransitionGroup
        className="container result"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div>
          <img src={props.imgSrc} alt={props.quizResult}></img>
          <div>We recommend <strong>{props.quizResult}</strong>!</div>
          <div><a href={props.shopLink} >Buy</a></div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }

  Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    shopLink: PropTypes.string.isRequired
  };

  export default Result;
