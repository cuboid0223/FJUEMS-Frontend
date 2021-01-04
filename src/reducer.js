export const initialState = {
  user: null,
  events: [],
  selectedEventId: "",
  updateEvent: false,
};
export const actionTypes = {
  SET_USER: "SET_USER",
  SET_EVENTS: "SET_EVENTS",
  SET_SELECTEDEVENTID: "SET_SELECTEDEVENTID",
  SET_UPDATEEVENT: "SET_UPDATEEVENT",
};

const reducer = (state, action) => {
  console.log(action); //debug
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_EVENTS:
      return {
        ...state,
        events: action.events,
      };
    case actionTypes.SET_SELECTEDEVENTID:
      return {
        ...state,
        selectedEventId: action.selectedEventId,
      };
    case actionTypes.SET_UPDATEEVENT:
      return {
        ...state,
        updateEvent: action.updateEvent,
      };

    default:
      return state;
  }
};

export default reducer;
