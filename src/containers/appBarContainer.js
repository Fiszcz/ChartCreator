import {connect} from "react-redux";
import {initialiseExportCSV, initialiseImportDataFromCSV} from "../actions/dataActions";
import {AppBarWithStyle} from "../components/AppBar/AppBar";

const mapDispatchToProps = dispatch => {
    return {
        importFileContent: (file) => {
            initialiseImportDataFromCSV(file)(dispatch);
        },
        initExportCSV: () => {
            dispatch(initialiseExportCSV());
        }
    }
};

export const AppBarContainer = connect(
    null,
    mapDispatchToProps
)(AppBarWithStyle);