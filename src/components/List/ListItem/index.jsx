import moment from "moment";
import DelListItemButtom from "./DelListItemButton";
import RunButton from "./RunButton";
import s from "./style.module.css";

const ListItem = ({
  tracker: { id, trackerName, isTracked },
  delItem,
  playTime,
}) => {
  const date1 = moment(id);
  const date2 = moment();
  const result = date2.diff(date1, "second");
  return (
    <li className={`${s.item} ${isTracked && s.active}`}>
      <div className={s.itemName}>{+date1}</div>
      <div className={s.itemTimer}>{+result}</div>
      <RunButton onClickEvent={() => playTime(id)} isRun={isTracked} />
      <DelListItemButtom onClickEvent={() => delItem(id)} />
    </li>
  );
};

export default ListItem;
