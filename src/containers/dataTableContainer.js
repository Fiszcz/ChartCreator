import {DataTableWithStyle} from "../components/DataTable/DataTable";
import {connect} from "react-redux";
import {addColumn, addRow, changeColor, endExportCSV} from "../actions/dataActions";

const mapStateToProps = (state) => {
    return {data: state.data, exportCSV: state.exportCSV};
};

const mapDispatchToProps = dispatch => {
    return {
        addNewRow: () => dispatch(addRow()),
        addNewColumn: () => dispatch(addColumn()),
        endExportCSV: () => dispatch(endExportCSV()),
        changeColor: (row, column, color) => dispatch(changeColor(row, column, color)),
    }
};

export const DataTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DataTableWithStyle);