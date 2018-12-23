import {END_EXPORT_CSV, INIT_EXPORT_CSV} from "../actions/dataActions";

export function exportReducer(state = false, action){
    switch(action.type){
        case INIT_EXPORT_CSV:
            return true;
        case END_EXPORT_CSV:
            return false;
        default:
            return state;
    }
}