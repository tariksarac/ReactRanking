import React from 'react';
import ExcelDropzone from './excel-dropzone.jsx';
import { MTRow, MTColumn } from 'mt-ui';
import users from './user';
import scores from './scores';
import UserRanking from './components/UserRanking';
import UserForm from './components/UserForm';
import { ObjectId } from './helper/generateId';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: users,
      scores: scores
    };

    this.handleAddScore = this.handleAddScore.bind(this);
    this.handleSheetData = this.handleSheetData.bind(this);
  }

  handleSheetData(data) {
    data.forEach(dataItem => {
      let user = this.state.users.find(item => item.name === dataItem.name);
      if (user) {
        this.setState({ scores: [...this.state.scores, { userId: user._id, score: dataItem.score }] });
      } else {
        let id = ObjectId();
        this.setState({
          users: [...this.state.users, { _id: id, name: dataItem.name }],
          scores: [...this.state.scores, { userId: id, score: dataItem.score }]
        });
      }
    });
  }

  handleAddScore(name, score) {
    let user = this.state.users.find(item => item.name === name);
    if (user) {
      this.setState({ scores: [...this.state.scores, { userId: user._id, score: score }] });
    } else {
      let id = ObjectId();
      this.setState({
        users: [...this.state.users, { _id: id, name: name }],
        scores: [...this.state.scores, { userId: id, score: score }]
      });
    }
  }

  render() {
    return (
      <div className="container container--centered">
        <h1 className="m-t">Ranking Application</h1>
        <MTRow>
          <MTColumn width={20}>
            <ExcelDropzone onSheetDrop={this.handleSheetData} label="Drop your file here" />
          </MTColumn>
          <MTColumn width={75} offset={5}>
            <div>
              <h2>Users ranking</h2>
              <UserRanking users={this.state.users} scores={this.state.scores} />
            </div>
            <div>
              <h2>Add new user ranking</h2>
              <UserForm handleAddScore={this.handleAddScore} />
            </div>
          </MTColumn>
        </MTRow>
      </div>
    );
  }
}
