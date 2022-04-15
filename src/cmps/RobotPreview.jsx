export function RobotPreview({robot}) {
  const robotStyle = {
    backgroundImage: `url(https://robohash.org/${robot._id})`,
  };
  return (
    <section style={robotStyle} className="robot-preview">
      <section className="info">
        <h2>{robot.modal}</h2>
        <h4>{robot.type}</h4>
      </section>
    </section>
  );
}
