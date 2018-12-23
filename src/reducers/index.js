import {annotationsReducer} from "./annotationsReducer";
import {basicSettingsChartReducer} from "./basicSettingsChartReducer";
import {combineReducers} from "redux";
import {dataReducer} from "./dataReducer";

export const chartsApp = combineReducers({
    annotations: annotationsReducer,
    basicSettings: basicSettingsChartReducer,
    data: dataReducer,
});
