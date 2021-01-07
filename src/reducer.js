export const initialState = {
  user: null,
  // SearchEvents: [],
  query: "",
  selectedEvent: null,
  updateEvent: false,
};
export const actionTypes = {
  SET_USER: "SET_USER",
  SET_SEARCHQUERY: "SET_SEARCHQUERY",
  SET_SELECTEDEVENT: "SET_SELECTEDEVENT",
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
    case actionTypes.SET_SEARCHQUERY:
      return {
        ...state,
        query: action.query,
      };
    case actionTypes.SET_SELECTEDEVENT:
      return {
        ...state,
        selectedEvent: action.selectedEvent,
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
