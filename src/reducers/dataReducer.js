import {ADD_COLUMN, ADD_ROW, CHANGE_COLOR, CHANGE_DATA, IMPORT_SUCCESS} from "../actions/dataActions";
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
    changes.forEach(([row, prop, oldValue, newValue]) => {
        data[row][prop] = newValue;
    });
    return data.slice(0);
};

const changeColor = (data, row, column, color) => {
    data[row][column] = color;
    return data.slice(0);
};

const addNewRow = (data) => {
    let newRow = [getRandomColor(), "Nowy rekord"];
    for (let i = 2; data[0].length > i; i++)
        newRow.push(0);
    data.push(newRow);
    return data.slice(0);
};

const addNewColumn = (data) => {
    data.map((row, index) => {
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
    return data.slice(0);
};
