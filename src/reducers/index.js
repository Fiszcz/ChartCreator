import {annotationsReducer} from "./annotationsReducer";
import {basicSettingsChartReducer} from "./basicSettingsChartReducer";
import {combineReducers} from "redux";
import {dataReducer} from "./dataReducer";
import {exportReducer} from "./exportReducer";
import undoable, { distinctState } from 'redux-undo'
import {messagesReducer} from "./messagesReducer";

const chartsApp = combineReducers({
    annotations: annotationsReducer,
    basicSettings: basicSettingsChartReducer,
    data: dataReducer,
    exportCSV: exportReducer,
    message: messagesReducer,
});

export const undoableChartsApp = undoable(chartsApp, {
    filter: distinctState()
});
