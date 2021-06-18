import React, {Component} from 'react';
import Wolf9 from './wolf9';
import leftarrow from '../left-arrow.png'

class wolf9withback extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this); // i think you are missing this
    
}

goBack(){
    this.props.history.goBack();

}





  /*
   * Main render method of this class
   */
  render() {
    return (
      <div>
        <button className="backbutton"onClick={this.goBack}><img height="25px"src={leftarrow} alt="back"></img></button>
        <Wolf9/>
      </div>
    );
  }
}

export default wolf9withback;