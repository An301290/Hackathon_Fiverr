const Event = (props) => {
  const { name, desc, date, participants, owner, location_name, category } =
    props;
  return (
    <div>
      Name of Event: {name}
      {/* Date: {date.getDate()} at {date.getHours()}:{date.getMinutes()} */}
      Description: {desc}
      Organizer: {owner}
      Where: {location_name}
      Who is coming? {participants}
    </div>
  );
};

export default Event;
