import { useEffect } from "react";
import DelListItemButtom from "./DelListItemButton";
import RunButton from "./RunButton";
import s from "./style.module.css";

const ListItem = ({
  tracker: { id, trackerName, isTracked, elapsedTime },
  delItem,
  playTime,
  tickTracker,
}) => {
  useEffect(() => {
    if (isTracked) {
      const nextSecond = 1000 - (Date.now() % 1000);
      const tick = setInterval(() => {
        tickTracker(id);
      }, nextSecond);
      return () => clearInterval(tick);
    }
  }, [id, isTracked, tickTracker]);

  const msToTime = (duration) => {
    let seconds = parseInt((duration / 1000) % 60, 10),
      minutes = parseInt((duration / (1000 * 60)) % 60, 10),
      hours = parseInt(duration / (1000 * 60 * 60), 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <li className={`${s.item} ${isTracked && s.active}`}>
      <div className={s.itemName}>{trackerName}</div>
      <div className={s.itemTimer}>
        {elapsedTime ? msToTime(elapsedTime) : "00:00:00"}
      </div>
      <RunButton onClickEvent={() => playTime(id)} isRun={isTracked} />
      <DelListItemButtom onClickEvent={() => delItem(id)} />
    </li>
  );
};

export default ListItem;
