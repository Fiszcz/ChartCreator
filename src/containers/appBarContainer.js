import {connect} from "react-redux";
import {initialiseImportDataFromCSV} from "../actions/dataActions";
import {AppBarWithStyle} from "../components/AppBar/AppBar";

const mapDispatchToProps = dispatch => {
    return {
        importFileContent: (file) => {
            initialiseImportDataFromCSV(file)(dispatch);
        },
    }
};

export const AppBarContainer = connect(
    null,
    mapDispatchToProps
)(AppBarWithStyle);