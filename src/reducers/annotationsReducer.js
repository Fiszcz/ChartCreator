import {ADD_ANNOTATION} from "../actions/annotationsActions";

const initialState = {
    annotations: [],
};

export function annotationsReducer( state = initialState, action ) {
    if (action.type === ADD_ANNOTATION)
        return {...state, annotations: state.annotations.concat(action.annotation)};
    return state;
}
