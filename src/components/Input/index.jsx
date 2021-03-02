import { connect } from "react-redux";
import { addNewTracker, inputNewTrackerName } from "../../redux/app-reducer";
import InputButton from "./InputButton";
import s from "./style.module.css";

const Input = (props) => {
  const onChangeInput = (e) => {
    props.inputNewTrackerName(e.target.value);
  };

  const onClickEvent = () => {
    props.addNewTracker();
  };
  const enterPress = (e) => {
    e.key === "Enter" && props.addNewTracker();
  };

  return (
    <div className={s.input}>
      <input
        type="text"
        placeholder="Enter tracker name"
        onChange={onChangeInput}
        onKeyPress={enterPress}
        value={props.inputValue}
      />
      <InputButton onClickEvent={onClickEvent} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  inputValue: state.app.newTrackerName,
});
export default connect(mapStateToProps, { inputNewTrackerName, addNewTracker })(
  Input
);
