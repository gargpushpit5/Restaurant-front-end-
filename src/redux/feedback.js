import * as ActionTypes from './ActionTypes';

export const Feedback = (state = { errMess: null, feedback:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
        var feed = action.payload;
        console.log("from feedback reducer "+ feed);
        return { ...state, feedback: state.feedback.concat(feed)};

    default:
      return state;
  }
};