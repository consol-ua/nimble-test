import moment from "moment";

const INIT_APP = "app-reducer/INIT_APP";
const INPUT_NEW_TRACKER_NAME = "app-reducer/INPUT_NEW_TRACKER_NAME";
const ADD_NEW_TRACKER = "app-reducer/ADD_NEW_TRACKER";
const REMOVE_TRACKER = "app-reducer/REMOVE_TRACKER";
const MOVE_TRACKER = "app-reducer/MOVE_TRACKER";

const initialState = {
  inititalazed: false,
  newTrackerName: "",
  trackers: [
    {
      id: 1,
      trackerName: "test tracker",
      isTracked: false,
      startTracker: 111,
    },
  ],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_APP:
      return {
        ...state,
        inititalazed: true,
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
            return { ...el, isTracked: !el.isTracked };
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
            id: moment().valueOf(),
            trackerName:
              state.newTrackerName !== ""
                ? state.newTrackerName
                : `No name tracker #${"creacte data"}`,
            isTracked: true,
          },
          ...state.trackers,
        ],
        newTrackerName: "",
      };
    default:
      return state;
  }
};

export const initApp = () => ({
  type: INIT_APP,
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

export default appReducer;
