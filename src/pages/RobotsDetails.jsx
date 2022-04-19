import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom/cjs/react-router-dom.min';
import {robotService} from '../services/robotService';

export const RobotsDetails = (props) => {
  const params = useParams();
  const [robot, setRobot] = useState(null);

  useEffect(() => {
    loadRobot();
  }, [params.id]);

  // state = {
  //   robot: null,
  // };

  // async componentDidMount() {
  //   this.loadRobot();
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.match.params.id !== this.props.match.params.id) {
  //     this.loadRobot();
  //   }
  // }

  const loadRobot = async () => {
    const robot = await robotService.getById(this.props.match.params.id);
    // this.setState({robot});
    setRobot(robot);
  };

  const onBack = () => {
    props.history.push('/');
    // this.props.history.goBack()
  };

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
        <button onClick={onBack}>Back</button>
        <Link to="/robot/r2">Next Robot</Link>
      </section>
    </section>
  );
};
