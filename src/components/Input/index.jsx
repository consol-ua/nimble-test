import { connect } from "react-redux";
import { addNewTracker, inputNewTrackerName } from "../../redux/app-reducer";
import InputButton from "./InputButton";
import s from "./style.module.css";

const Input = (props) => {
  const onChangeInput = (e) => {
    props.inputNewTrackerName(e.target.value);
  };

  const onAddTracker = (e) => {
    if (!e.key) {
      props.addNewTracker();
    } else if (e.key === "Enter") {
      props.addNewTracker();
    }
  };

  return (
    <div className={s.input}>
      <input
        type="text"
        placeholder="Enter tracker name"
        onChange={onChangeInput}
        onKeyPress={onAddTracker}
        value={props.inputValue}
      />
      <InputButton onClickEvent={onAddTracker} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  inputValue: state.app.newTrackerName,
});
export default connect(mapStateToProps, { inputNewTrackerName, addNewTracker })(
  Input
);
