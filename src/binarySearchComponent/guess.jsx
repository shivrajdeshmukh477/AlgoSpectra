import React, { Component } from 'react';
import RangeSlider from './doubleSlider';

class Guess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelection: null, // Track the user's selection
    };
  }

  handleYesClick = () => {
    if (this.props.upper <= this.props.lower) {
      // User clicked "Yes" when upper is greater than lower
      this.setState({ userSelection: 'Yes' });
    } else {
      // User made the correct choice
      this.props.yesButton();
    }
  };

  handleNoClick = () => {
    if (this.props.upper > this.props.lower) {
      // User clicked "No" when upper is less than or equal to lower
      this.setState({ userSelection: 'No' });
    } else {
      // User made the correct choice
      this.props.noButton();
    }
  };

  render() {
    const { userSelection } = this.state;

    return (
      <div>
        <p>
          <button
            className="btn btn-secondary btn-lg"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Toggle Range
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <center style={{ justifyContent: 'center' }}>
              <RangeSlider upper={this.props.upper} lower={this.props.lower} max={this.props.max} />
            </center>
          </div>
        </div>

        <h1>Is your number greater than {this.getMid()}?</h1> <br />
        {userSelection === null ? (
          <div>
            <button className="btn btn-lg btn-success m-2" onClick={this.handleYesClick}>
              Yes
            </button>
            <button className="btn btn-lg btn-danger m-2" onClick={this.handleNoClick}>
              No
            </button>
          </div>
        ) : (
          <div>
            <p>Wrong button clicked! Please try again.</p>
          </div>
        )}
      </div>
    );
  }

  getMid = () => {
    const mid = Math.floor((this.props.upper + this.props.lower) / 2);
    return mid;
  };
}

export default Guess;
