import { connect } from "react-redux";
import { moveTracker, removeTracker } from "../../redux/app-reducer";
import ListItem from "./ListItem";
import s from "./style.module.css";

const List = ({ trackers, removeTracker, moveTracker }) => {
  const delItem = (id) => {
    removeTracker(id);
  };
  const playTime = (id) => {
    moveTracker(id);
  };

  return (
    <ul className={s.list}>
      {trackers.map((tracker) => (
        <ListItem
          tracker={tracker}
          delItem={delItem}
          playTime={playTime}
          key={tracker.id}
        />
      ))}
    </ul>
  );
};
const MapStateToProps = (state) => ({
  trackers: state.app.trackers,
});
export default connect(MapStateToProps, {
  removeTracker,
  moveTracker,
})(List);
