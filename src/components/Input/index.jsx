import { connect } from "react-redux";
import {
  addNewTracker,
  inputNewTrackerName,
  tickTracker,
} from "../../redux/app-reducer";
import InputButton from "./InputButton";
import s from "./style.module.css";

const Input = ({
  inputValue,
  inputNewTrackerName,
  addNewTracker,
  tickTracker,
}) => {
  const onChangeInput = (e) => {
    inputNewTrackerName(e.target.value);
  };

  const onAddTracker = (e) => {
    if (!e.key) {
      tickTracker();
      addNewTracker();
    } else if (e.key === "Enter") {
      tickTracker();
      addNewTracker();
    }
  };

  return (
    <div className={s.input}>
      <input
        type="text"
        placeholder="Enter tracker name"
        onChange={onChangeInput}
        onKeyPress={onAddTracker}
        value={inputValue}
      />
      <InputButton onClickEvent={onAddTracker} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  inputValue: state.app.newTrackerName,
});
export default connect(mapStateToProps, {
  inputNewTrackerName,
  addNewTracker,
  tickTracker,
})(Input);
