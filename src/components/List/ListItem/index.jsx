import moment from "moment";
import DelListItemButtom from "./DelListItemButton";
import RunButton from "./RunButton";
import s from "./style.module.css";

const ListItem = ({
  tracker: { id, trackerName, isTracked },
  delItem,
  playTime,
}) => {
  return (
    <li className={`${s.item} ${isTracked && s.active}`}>
      <div className={s.itemName}>
        {trackerName === ""
          ? `No name tracker ${moment().format("DD/MM HH:mm:ss")}`
          : trackerName}
      </div>
      <div className={s.itemTimer}>timer</div>
      <RunButton onClickEvent={() => playTime(id)} isRun={isTracked} />
      <DelListItemButtom onClickEvent={() => delItem(id)} />
    </li>
  );
};

export default ListItem;
