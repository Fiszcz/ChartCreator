import {ADD_ANNOTATION} from "../actions/annotationsActions";

export function annotationsReducer( state = [], action ) {
    if (action.type === ADD_ANNOTATION)
        return state.concat(action.annotation);
    return state;
}
