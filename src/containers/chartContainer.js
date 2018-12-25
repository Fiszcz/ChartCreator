import {connect} from "react-redux";
import {Chart} from "../components/Chart/Chart";

const mapStateToProps = state => {
    return {
        typeChart: state.present.basicSettings.typeChart,
        title: state.present.basicSettings.title,
        titleAxisX: state.present.basicSettings.titleAxisX,
        titleAxisY: state.present.basicSettings.titleAxisY,
        data: state.present.data,
        annotations: state.present.annotations
    }
};

export const ChartContainer = connect(
    mapStateToProps
)(Chart);
