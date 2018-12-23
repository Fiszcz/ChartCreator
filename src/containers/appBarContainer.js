import {connect} from "react-redux";
import {initialiseExportCSV, initialiseImportDataFromCSV} from "../actions/dataActions";
import {AppBarWithStyle} from "../components/AppBar/AppBar";
import {ActionCreators as UndoActionCreators} from 'redux-undo'

const mapStateToProps = state => {
    return {
        canUndo: state.past.length > 0,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        importFileContent: (file) => {
            initialiseImportDataFromCSV(file)(dispatch);
        },
        initExportCSV: () => {
            dispatch(initialiseExportCSV());
        },
        onUndo: () => {
            dispatch(UndoActionCreators.undo());
        },
    }
};

export const AppBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppBarWithStyle);