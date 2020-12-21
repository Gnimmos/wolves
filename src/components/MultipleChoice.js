import React from 'react';  
import PropTypes from 'prop-types';

class Question extends React.Component {
    render (){
     return <h2 className="question">{this.props.content}</h2>;
        };
  } 
  
 
  export default Question;  