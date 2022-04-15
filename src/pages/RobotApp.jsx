import {Component} from 'react';
import {RobotList} from '../cmps/RobotList';
import {robotService} from '../services/robotService';

export class RobotApp extends Component {
  state = {
    robots: null,
  };

  componentDidMount() {
    this.loadRobots();
  }

  async loadRobots() {
    const robots = await robotService.query();
    this.setState({robots});
  }

  render() {
    const {robots} = this.state;
    if (!robots) return <div>Loading...</div>; // prevent error when robots is null at the start
    return (
      <section className="robot-app">
        <RobotList robots={robots} />
      </section>
    );
  }
}
