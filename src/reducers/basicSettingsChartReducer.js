import {
    CHANGE_TYPE_CHART,
    SET_TITLE,
    SET_TITLE_AXIS_X,
    SET_TITLE_AXIS_Y
} from "../actions/basicSettingsChartActions";

const initialState = {
    title: "",
    titleAxisX: "",
    titleAxisY: "",
    typeChart: 'bar-vertical'
};

export function basicSettingsChartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TITLE:
            return {...state, title: action.title};
        case SET_TITLE_AXIS_Y:
            return {...state, titleAxisY: action.titleAxis};
        case SET_TITLE_AXIS_X:
            return {...state, titleAxisX: action.titleAxis};
        case CHANGE_TYPE_CHART:
            return {...state, typeChart: action.typeChart};
        default:
            return state
    }
}