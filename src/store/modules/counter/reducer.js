const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + action.payload;

    case "DEC":
      return state - action.payload;

    default:
      return state;
  }
};
export default reducerCounter;
