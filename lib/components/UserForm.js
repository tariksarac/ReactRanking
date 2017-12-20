'use strict';
import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      score: '',
      message: null
    };
  }

  render() {
    return (
      <div>
        <div className="user-form-container">
          <input
            type={'text'}
            placeholder={'Name'}
            onChange={e => this.setState({ name: e.target.value, message: null })}
            required
          />
          <input
            type={'number'}
            placeholder={'Score'}
            onChange={e => this.setState({ score: e.target.value, message: null })}
            required
          />
          <button
            onClick={() => {
              this.props.handleAddScore(this.state.name, this.state.score);
              this.setState({ message: 'Your score is saved' });
            }}
          >
            Submit
          </button>
        </div>
        {this.state.message && <div className="message">{this.state.message}</div>}
      </div>
    );
  }
}

export default UserForm;
