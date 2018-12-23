import {DataTableWithStyle} from "../components/DataTable/DataTable";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {data: state.data};
};

export const DataTableContainer = connect(
    mapStateToProps,
)(DataTableWithStyle);