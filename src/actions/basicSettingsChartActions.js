/*
 * action types
 */

export const SET_TITLE = 'SET_TITLE';
export const CHANGE_TYPE_CHART = 'CHANGE_TYPE_CHART';
export const SET_TITLE_AXIS_X = 'SET_TITLE_AXIS_X';
export const SET_TITLE_AXIS_Y = 'SET_TITLE_AXIS_Y';

/*
 * action creators
 */

export function setTitle(title) {
    return { type: SET_TITLE, title };
}

export function changeTypeChart(typeChart) {
    return { type: CHANGE_TYPE_CHART, typeChart };
}

export function setTitleAxisX(titleAxis) {
    return { type: SET_TITLE_AXIS_X, titleAxis };
}

export function setTitleAxisY(titleAxis) {
    return { type: SET_TITLE_AXIS_Y, titleAxis };
}
