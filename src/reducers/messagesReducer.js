import {IMPORT_FAILURE} from "../actions/dataActions";

export function messagesReducer( state = {message: '', id: 1}, action ) {
    if (action.type === IMPORT_FAILURE)
        return {message: 'Wystąpił problem z importowaniem danych z CSV. Sprawdź poprawność pliku i danych.', id: Math.random()*1000};
    return state;
}