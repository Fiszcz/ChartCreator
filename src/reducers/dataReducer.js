import {IMPORT_SUCCESS} from "../actions/dataActions";
import {getRandomColor} from "../utils/colors";

const initialState = [
        ["", "", getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()],
        ["", "Rok", "Ford", "Volvo", "Toyota", "Honda"],
        [getRandomColor(), "2016", "10", "11", "12", "13"],
        [getRandomColor(), "2017", "10", "11", "12", "13"],
        [getRandomColor(), "2017", "10", "11", "12", "13"],
];

export function dataReducer(state = initialState, action) {
    switch (action.type) {
        case IMPORT_SUCCESS:
            return action.data;
        default:
            return state;
    }
}
