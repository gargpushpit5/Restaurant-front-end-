import * as ActionTypes from './ActionTypes';

import { USERS } from '../shared/users';




export const addBlog = (journalId, article, tags) => ({
    type: ActionTypes.ADD_BLOG,
    payload: {
        journalId:journalId,
        article:article,
        tags:tags
    }
});



export const addVital = (journalId, oxygenLevel, temp, status) => ({
    type: ActionTypes.ADD_VITAL,
    payload: {
        journalId: journalId,
        oxygenLevel: oxygenLevel,
        temp: temp,
        status: status
    }
});



//for users
export const fetchUsers = () => (dispatch) => {

    dispatch(usersLoading(true));

    setTimeout(() => {
        dispatch(addUsers(USERS));
    }, 2000);
}

export const usersLoading = () => ({
    type: ActionTypes.USERS_LOADING
});

export const usersFailed = (errmess) => ({
    type: ActionTypes.USERS_FAILED,
    payload: errmess
});

export const addUsers= (users) => ({
    type: ActionTypes.ADD_USERS,
    payload: users
});