import {ADD_COLUMN, ADD_ROW, CHANGE_COLOR, CHANGE_DATA, IMPORT_SUCCESS} from "../actions/dataActions";
import {getRandomColor} from "../utils/colors";
import {getRandomNumber} from "../utils/math";

const initialState = [
        ["", "", getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()],
        ["", "Rok", "Ford", "Volvo", "Toyota", "Honda"],
        [getRandomColor(), "2016", getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber()],
        [getRandomColor(), "2017", getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber()],
        [getRandomColor(), "2018", getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber()],
];

export function dataReducer(state = initialState, action) {
    switch (action.type) {
        case IMPORT_SUCCESS:
            return action.data;
        case ADD_COLUMN:
            return addNewColumn(state);
        case ADD_ROW:
            return addNewRow(state);
        case CHANGE_COLOR:
            return changeColor(state, action.row, action.column, action.color);
        case CHANGE_DATA:
            return changeData(state, action.changes);
        default:
            return state;
    }
}

const changeData = (data, changes) => {
    let newData = JSON.parse(JSON.stringify(data));
    changes.forEach(([row, prop, oldValue, newValue]) => {
        newData[row][prop] = newValue;
    });
    return newData;
};

const changeColor = (data, row, column, color) => {
    let newData = JSON.parse(JSON.stringify(data));
    newData[row][column] = color;
    return newData.slice(0);
};

const addNewRow = (data) => {
    let newData = JSON.parse(JSON.stringify(data));
    let newRow = [getRandomColor(), "Nowy rekord"];
    for (let i = 2; data[0].length > i; i++)
        newRow.push(0);
    newData.push(newRow);
    return newData.slice(0);
};

const addNewColumn = (data) => {
    let newData = JSON.parse(JSON.stringify(data));
    newData.map((row, index) => {
        switch(index){
            case 0:
                row.push(getRandomColor());
                return row;
            case 1:
                row.push("Nowa kolumna");
                return row;
            default:
                row.push(0);
                return row;
        }
    });
    return newData.slice(0);
};
