import {RobotPreview} from './RobotPreview';

export function RobotList({robots, onSelectRobot, onRemoveRobot}) {
  return (
    <section className="robot-list simple-cards-grid">
      {robots.map((robot) => (
        <RobotPreview
          onSelectRobot={onSelectRobot}
          onRemoveRobot={onRemoveRobot}
          key={robot._id}
          robot={robot}
        />
      ))}
    </section>
  );
}
