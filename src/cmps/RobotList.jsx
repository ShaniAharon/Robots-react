import {RobotPreview} from './RobotPreview';

export function RobotList({robots, onSelectRobot}) {
  return (
    <section className="robot-list simple-cards-grid">
      {robots.map((robot) => (
        <RobotPreview
          onSelectRobot={onSelectRobot}
          key={robot._id}
          robot={robot}
        />
      ))}
    </section>
  );
}
