import moment from "moment";

const INIT_APP = "app-reducer/INIT_APP";
const INPUT_NEW_TRACKER_NAME = "app-reducer/INPUT_NEW_TRACKER_NAME";
const ADD_NEW_TRACKER = "app-reducer/ADD_NEW_TRACKER";
const REMOVE_TRACKER = "app-reducer/REMOVE_TRACKER";
const MOVE_TRACKER = "app-reducer/MOVE_TRACKER";
const TICK_TRACKER = "app-reducer/TICK_TRACKER";

const initialState = {
  inititalazed: false,
  newTrackerName: "",
  trackers: [
    // {
    //   id: 0,
    //   trackerName: "test tracker",
    //   isTracked: false,
    //   startTracker: null,
    //   pauseTracker: null,
    //   elapsedTime: null,
    // },
  ],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_APP:
      return {
        ...state,
        inititalazed: true,
        trackers: [...action.trackers],
      };
    case INPUT_NEW_TRACKER_NAME:
      return {
        ...state,
        newTrackerName: action.text,
      };
    case REMOVE_TRACKER:
      return {
        ...state,
        trackers: state.trackers.filter((el) => el.id !== action.id),
      };
    case MOVE_TRACKER:
      return {
        ...state,
        trackers: state.trackers.map((el) => {
          if (el.id === action.id) {
            if (el.isTracked) {
              return {
                ...el,
                isTracked: false,
                pauseTracker: el.elapsedTime,
              };
            } else {
              return {
                ...el,
                isTracked: true,
                startTracker: +moment() - el.pauseTracker,
              };
            }
          } else {
            return el;
          }
        }),
      };
    case ADD_NEW_TRACKER:
      return {
        ...state,
        trackers: [
          {
            id: +moment(),
            trackerName:
              state.newTrackerName !== ""
                ? state.newTrackerName
                : `No name tracker #${state.trackers.length + 1}`,
            isTracked: true,
            startTracker: moment().valueOf(),
            elapsedTime: null,
          },
          ...state.trackers,
        ],
        newTrackerName: "",
      };
    case TICK_TRACKER:
      return {
        ...state,
        trackers: state.trackers.map((el) => {
          if (el.isTracked) {
            return {
              ...el,
              elapsedTime: action.timeNow - el.startTracker,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
};

export const initApp = (trackers) => ({
  type: INIT_APP,
  trackers,
});
export const inputNewTrackerName = (text) => ({
  type: INPUT_NEW_TRACKER_NAME,
  text,
});
export const addNewTracker = () => ({
  type: ADD_NEW_TRACKER,
});
export const removeTracker = (id) => ({
  type: REMOVE_TRACKER,
  id,
});
export const moveTracker = (id) => ({
  type: MOVE_TRACKER,
  id,
});
export const tickTracker = () => ({
  type: TICK_TRACKER,
  timeNow: +moment(),
});

export default appReducer;
