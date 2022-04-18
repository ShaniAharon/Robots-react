import {Component} from 'react';
import {RobotList} from '../cmps/RobotList';
import {RobotFilter} from '../cmps/RobotFilter';
import {robotService} from '../services/robotService';
import {Link} from 'react-router-dom';
import {NiceButton} from '../cmps/NiceButton';

export class RobotApp extends Component {
  state = {
    robots: null,
    selectedRobotId: null,
  };

  componentDidMount() {
    this.loadRobots();
  }

  async loadRobots() {
    const robots = await robotService.query(this.state.filterBy);
    this.setState({robots});
  }

  onRemoveRobot = async (robotId) => {
    await robotService.remove(robotId);
    this.loadRobots();
  };

  onChangeFilter = (filterBy) => {
    this.setState({filterBy}, this.loadRobots);
  };

  render() {
    const {robots} = this.state;
    if (!robots) return <div>Loading...</div>; // prevent error when robots is null at the start
    const Icon = () => '🎈';
    return (
      <section className="robot-app">
        <RobotFilter onChangeFilter={this.onChangeFilter} />
        <Link to="/robot/edit">Add Robot</Link>
        <RobotList
          history={this.props.history}
          onRemoveRobot={this.onRemoveRobot}
          robots={robots}
        />
        <NiceButton
          onClick={() => console.log('Nice btn clicked')}
          className="nice-button"
          Icon={Icon}
        >
          Nice button
        </NiceButton>
      </section>
    );
  }
}
