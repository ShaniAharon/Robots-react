import {Component} from 'react';
import {robotService} from '../services/robotService';

export class RobotsDetails extends Component {
  state = {
    robot: null,
  };

  async componentDidMount() {
    const robot = await robotService.getById(this.props.robotId);
    this.setState({robot});
  }

  render() {
    const {robot} = this.state;
    if (!robot) return <div>Loading...</div>;
    return (
      <section className="robot-details">
        <section>
          <h3>Model: {robot.model}</h3>
        </section>
        <section>
          <h3>Type: {robot.type}</h3>
        </section>
        <section>
          <h3>battery status: {robot.batteryStatus}</h3>
        </section>
        <img src={`https://robohash.org/${robot._id}`} alt="" />
        <section>
          <button onClick={this.props.goBack}>go Back</button>
        </section>
      </section>
    );
  }
}
