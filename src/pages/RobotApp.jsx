import {Component} from 'react';
import {RobotList} from '../cmps/RobotList';
import {RobotFilter} from '../cmps/RobotFilter';
import {Link} from 'react-router-dom';
import {NiceButton} from '../cmps/NiceButton';
import {connect} from 'react-redux';
import {
  loadRobots,
  removeRobot,
  setFilterBy,
} from '../store/actions/robotActions';

class _RobotApp extends Component {
  // state = {
  //   robots: null,
  //   selectedRobotId: null,
  // };

  componentDidMount() {
    this.props.loadRobots();
  }

  // async loadRobots() {
  //   const robots = await robotService.query(this.state.filterBy);
  //   this.setState({robots});
  // }

  onRemoveRobot = async (robotId) => {
    this.props.removeRobot(robotId);
  };

  onChangeFilter = async (filterBy) => {
    // this.setState({filterBy}, this.loadRobots);
    await this.props.setFilterBy(filterBy);
    this.props.loadRobots();
  };

  render() {
    const {robots} = this.props;
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

const mapStateToProps = (state) => {
  return {
    robots: state.robotModule.robots,
  };
};

const mapDispatchToProps = {
  loadRobots,
  removeRobot,
  setFilterBy,
};

export const RobotApp = connect(mapStateToProps, mapDispatchToProps)(_RobotApp);
