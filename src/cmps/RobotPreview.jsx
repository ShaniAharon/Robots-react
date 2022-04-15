export function RobotPreview({robot, onSelectRobot}) {
  const robotStyle = {
    backgroundImage: `url(https://robohash.org/${robot._id})`,
  };
  return (
    <section style={robotStyle} className="robot-preview">
      <section className="info" onClick={() => onSelectRobot(robot._id)}>
        <h2>{robot.modal}</h2>
        <h4>{robot.type}</h4>
      </section>
    </section>
  );
}
