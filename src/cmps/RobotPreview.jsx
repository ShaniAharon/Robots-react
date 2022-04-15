export function RobotPreview({robot, onSelectRobot, onRemoveRobot}) {
  const robotStyle = {
    backgroundImage: `url(https://robohash.org/${robot._id})`,
  };
  return (
    <section style={robotStyle} className="robot-preview">
      <section className="info" onClick={() => onSelectRobot(robot._id)}>
        <h2>{robot.model}</h2>
        <h4>{robot.type}</h4>
      </section>
      <section className="actions">
        <button onClick={() => onRemoveRobot(robot._id)}>Delete</button>
      </section>
    </section>
  );
}
