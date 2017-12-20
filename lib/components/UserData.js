'use strict';
import React from 'react';

class UserData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  render() {
    let sortedScores = this.props.data.scores.sort((a, b) => b - a);

    return (
      <div className="user-data-container">

        <div
          className="user-box"
          onClick={() => this.setState({ expanded: !this.state.expanded })}
          style={{ backgroundColor: this.props.bgColor ? '#b7b7b7' : null }}
        >
          <div className="user-rank">{this.props.rank}</div>
          <div className="user-name">{this.props.data.name}</div>
          <div className="user-score-sum">{this.props.data.scoresSum}</div>
        </div>

        {this.state.expanded && (
          <div className="score-box">
            {sortedScores.map((item, index) => {
              return (
                <div
                  key={index}
                  className="scores"
                  style={{ borderBottom: sortedScores.length - 1 === index ? 0 : null }}
                >
                  <div className="score-rank">{index + 1}</div>
                  <div className="score-points">{item}</div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    );
  }
}

export default UserData;
