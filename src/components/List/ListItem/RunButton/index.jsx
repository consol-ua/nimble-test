import s from "./style.module.css";

const RunButton = ({ onClickEvent, isRun }) => {
  return (
    <div className={s.button} onClick={onClickEvent}>
      {isRun ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="100%"
          height="100%"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="100%"
          height="100%"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      )}
    </div>
  );
};

export default RunButton;
