import {annotationsReducer} from "./annotationsReducer";
import {basicSettingsChartReducer} from "./basicSettingsChartReducer";
import {combineReducers} from "redux";
import {dataReducer} from "./dataReducer";
import {exportReducer} from "./exportReducer";
import undoable, { distinctState } from 'redux-undo'

const chartsApp = combineReducers({
    annotations: annotationsReducer,
    basicSettings: basicSettingsChartReducer,
    data: dataReducer,
    exportCSV: exportReducer,
});

export const undoableChartsApp = undoable(chartsApp, {
    filter: distinctState()
});
