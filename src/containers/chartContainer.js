import {connect} from "react-redux";
import {Chart} from "../components/Chart/Chart";

const mapStateToProps = state => {
    return {
        typeChart: state.typeChart,
        title: state.title,
        titleAxisX: state.titleAxisX,
        titleAxisY: state.titleAxisY,
    }
};

export const ChartContainer = connect(
    mapStateToProps
)(Chart);
