import {annotationsReducer} from "./annotationsReducer";
import {basicSettingsChartReducer} from "./basicSettingsChartReducer";
import {combineReducers} from "redux";

export const chartsApp = combineReducers({
    annotations: annotationsReducer,
    basicSettings: basicSettingsChartReducer,
});
