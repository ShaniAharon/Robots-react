import {RobotPreview} from './RobotPreview';

export function RobotList({robots, history, onRemoveRobot}) {
  return (
    <section className="robot-list simple-cards-grid">
      {robots.map((robot) => (
        <RobotPreview
          onRemoveRobot={onRemoveRobot}
          key={robot._id}
          robot={robot}
        />
      ))}
    </section>
  );
}
