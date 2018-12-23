import {DataTableWithStyle} from "../components/DataTable/DataTable";
import {connect} from "react-redux";
import {addColumn, addRow} from "../actions/dataActions";

const mapStateToProps = (state) => {
    return {data: state.data};
};

const mapDispatchToProps = dispatch => {
    return {
        addNewRow: () => dispatch(addRow()),
        addNewColumn: () => dispatch(addColumn()),
    }
};

export const DataTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DataTableWithStyle);