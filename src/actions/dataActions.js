import Papa from "papaparse";
import {addColorsToColumns, addColorsToRows} from "../utils/colors";

export const IMPORT_FROM_CSV = 'IMPORT_FROM_CSV';
export const IMPORT_SUCCESS = 'IMPORT_SUCCESS';
export const IMPORT_FAILURE = 'IMPORT_FAILURE';
export const INIT_EXPORT_CSV = 'INIT_EXPORT_CSV';
export const END_EXPORT_CSV = 'END_EXPORT_CSV';
export const ADD_ROW = 'ADD_ROW';
export const ADD_COLUMN = 'ADD_COLUMN';
export const CHANGE_COLOR = 'CHANGE_COLOR';

export function changeColor(row, column, color) {
    return { type: CHANGE_COLOR, row, column, color };
}

export function initialiseExportCSV() {
    return { type: INIT_EXPORT_CSV };
}

export function endExportCSV() {
    return { type: END_EXPORT_CSV };
}

export function importFromCSV(file) {
    return { type: IMPORT_FROM_CSV, file };
}

export function importSuccess(data) {
    return { type: IMPORT_SUCCESS, data };
}

export function importFailure(errors) {
    return { type: IMPORT_FAILURE, errors };
}

export function addRow() {
    return { type: ADD_ROW };
}

export function addColumn() {
    return { type: ADD_COLUMN };
}

export function initialiseImportDataFromCSV(file) {
    return (dispatch) => {
        dispatch(importFromCSV(file));

        Papa.parse(file, {
            header: false,
            dynamicTyping: true,
            complete: function(results) {
                if (results.errors.length)
                    dispatch(importFailure(results.errors));
                else {
                    let data = results.data;
                    data = addColorsToRows(data);
                    data = addColorsToColumns(data);
                    dispatch(importSuccess(data));
                }
            }
        });
    }
}
