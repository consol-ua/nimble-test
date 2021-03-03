import { connect } from "react-redux";
import {
  initApp,
  moveTracker,
  removeTracker,
  tickTracker,
} from "../../redux/app-reducer";
import ListItem from "./ListItem";
import s from "./style.module.css";

const List = ({
  trackers,
  removeTracker,
  moveTracker,
  tickTracker,
  inititalazed,
  initApp,
}) => {
  const delItem = (id) => {
    removeTracker(id);
  };
  const playTime = (id) => {
    moveTracker(id);
  };
  const tick = (id) => {
    tickTracker(id);
  };

  if (inititalazed) {
    localStorage.setItem("trackers", JSON.stringify(trackers));
  } else {
    const localTrackers = JSON.parse(localStorage.getItem("trackers"));
    initApp(localTrackers);
  }

  return (
    <ul className={s.list}>
      {trackers.map((tracker) => (
        <ListItem
          tracker={tracker}
          delItem={delItem}
          playTime={playTime}
          tickTracker={tick}
          key={tracker.id}
        />
      ))}
    </ul>
  );
};

const MapStateToProps = (state) => ({
  trackers: state.app.trackers,
  inititalazed: state.app.inititalazed,
});
export default connect(MapStateToProps, {
  removeTracker,
  moveTracker,
  tickTracker,
  initApp,
})(List);
