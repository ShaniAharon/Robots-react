import {Component} from 'react';
import {RobotList} from '../cmps/RobotList';
import {RobotsDetails} from './RobotsDetails';
import {robotService} from '../services/robotService';

export class RobotApp extends Component {
  state = {
    robots: null,
    selectedRobotId: null,
  };

  componentDidMount() {
    this.loadRobots();
  }

  async loadRobots() {
    const robots = await robotService.query();
    this.setState({robots});
  }

  onSelectRobot = (robotId) => {
    this.setState({selectedRobotId: robotId});
  };

  onRemoveRobot = async (robotId) => {
    await robotService.remove(robotId);
    this.loadRobots();
  };

  render() {
    const {robots, selectedRobotId} = this.state;
    if (!robots) return <div>Loading...</div>; // prevent error when robots is null at the start
    return (
      <section className="robot-app">
        {selectedRobotId ? (
          <RobotsDetails
            robotId={selectedRobotId}
            goBack={() => this.onSelectRobot(null)}
          />
        ) : (
          <RobotList
            onRemoveRobot={this.onRemoveRobot}
            onSelectRobot={this.onSelectRobot}
            robots={robots}
          />
        )}
      </section>
    );
  }
}
