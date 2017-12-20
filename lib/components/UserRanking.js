import React from 'react';
import UserData from './UserData';

class UserRanking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      scores: []
    };
  }

  componentWillMount() {
    this.setState({ users: this.props.users, scores: this.props.scores });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.users) {
      this.setState({ users: nextProps.users });
    }
    if (nextProps.scores) {
      this.setState({ scores: nextProps.scores });
    }
  }

  mapScoreToUser(users) {
    users.forEach(item => {
      item.scores = [];
      let userScores = this.state.scores.filter(score => score.userId === item._id);
      userScores.forEach(scoreObject => item.scores.push(parseInt(scoreObject.score)));
      item.scoresSum = item.scores.reduce((a, b) => a + b);
    });
    return users;
  }
  render() {
    let mappedData = this.mapScoreToUser(this.state.users);
    let sortedData = mappedData.sort((a, b) => b.scoresSum - a.scoresSum);

    return (
      <div className="user-ranking-container">
        <div className="user-box" style={{ borderBottom: '2px solid gray' }}>
          <div className="user-rank">
            <strong>Rank</strong>
          </div>
          <div className="user-name">
            <strong>Name</strong>
          </div>
          <div className="user-score-sum">
            <strong>Score</strong>
          </div>
        </div>
        {sortedData.map((item, index) => (
          <UserData key={item._id} rank={index + 1} data={item} bgColor={index % 2 !== 0} />
        ))}
      </div>
    );
  }
}

export default UserRanking;
