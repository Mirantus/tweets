// @flow

import type { ErrorType } from 'types/error';

import { TWEET_EDIT, TWEET_EDIT_ERROR } from '../constants.js';

import type { ActionType } from '../actions/types';

export type StateType = ?ErrorType;
const initialState = null;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case TWEET_EDIT:
            return initialState;
        case TWEET_EDIT_ERROR:
            return { ...action.payload };
        default:
            return state;
    }
};
