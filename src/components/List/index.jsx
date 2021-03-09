import { useEffect } from "react";
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
  useEffect(() => {
    if (trackers.some((el) => el.isTracked)) {
      const tick = setInterval(() => {
        tickTracker();
      }, 500);
      return () => clearInterval(tick);
    }
  }, [tickTracker, trackers]);

  useEffect(() => {
    if (inititalazed) {
      localStorage.setItem("trackers", JSON.stringify(trackers));
    } else {
      if (localStorage.getItem("trackers")) {
        const localTrackers = JSON.parse(localStorage.getItem("trackers"));
        initApp(localTrackers);
      } else {
        initApp([]);
      }
    }
  }, [initApp, inititalazed, trackers]);

  const delItem = (id) => {
    tickTracker();
    removeTracker(id);
  };
  const playTime = (id) => {
    tickTracker();
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
  inititalazed: state.app.inititalazed,
});
export default connect(MapStateToProps, {
  removeTracker,
  moveTracker,
  tickTracker,
  initApp,
})(List);
