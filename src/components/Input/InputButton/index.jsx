import s from "./style.module.css";

const InputButton = ({ onClickEvent }) => {
  return (
    <div className={s.button} onClick={onClickEvent}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="rgb(63, 175, 108)"
        width="100%"
        height="100%"
      >
        <g>
          <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M9.5,16.5v-9l7,4.5L9.5,16.5z" />
        </g>
      </svg>
    </div>
  );
};

export default InputButton;
