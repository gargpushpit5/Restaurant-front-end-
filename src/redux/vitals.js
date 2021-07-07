import { VITALS } from '../shared/vitals';
import * as ActionTypes from './ActionTypes';

export const Vitals = (state = VITALS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_VITAL:
            var vital = action.payload;
            vital.id = state.length;
            vital.date = new Date().toISOString();
            console.log("vital: ", vital);
            return state.concat(vital);

        default:
          return state;
      }
};
