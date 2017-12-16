import React from 'react';
import propTypes from 'prop-types';

 function Question(props) {

   return (
     <h2 className="question">{props.content}</h2>
   );
 }

 Question.propTypes = {
   content: propTypes.string.isRequired
 };

 export default Question;
