import * as types from "../actions/constants";

const INITIAL_STATE = {currency: {}};

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case types.CURRENCY_SUCCESS :
            return {...state, currency : action.payload.data};
    }
    return state;
}