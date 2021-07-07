import {createStore,combineReducers,applyMiddleware} from 'redux';
// import { Dishes } from './dishes';
// import { Comments } from './comments';
// import { Promotions } from './promotions';
import {Homes}  from './homes';
// import { Leaders } from './leaders';
import { Users } from './users';
import { Blogs} from './blogs';
import { Vitals } from './vitals';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            users:Users,
            vitals:Vitals,
            blogs:Blogs,
            homes:Homes,
            ...createForms({
                feedback: InitialFeedback
            })
        }),applyMiddleware(thunk,logger)
    );

    return store;
}