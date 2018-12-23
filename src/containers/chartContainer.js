import {connect} from "react-redux";
import {Chart} from "../components/Chart/Chart";

const mapStateToProps = state => {
    return {
        typeChart: state.basicSettings.typeChart,
        title: state.basicSettings.title,
        titleAxisX: state.basicSettings.titleAxisX,
        titleAxisY: state.basicSettings.titleAxisY,
        data: state.data,
    }
};

export const ChartContainer = connect(
    mapStateToProps
)(Chart);
