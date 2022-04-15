import {RobotPreview} from './RobotPreview';

export function RobotList({robots}) {
  return (
    <section className="robot-list simple-cards-grid">
      {robots.map((robot) => (
        <RobotPreview key={robot._id} robot={robot} />
      ))}
    </section>
  );
}
