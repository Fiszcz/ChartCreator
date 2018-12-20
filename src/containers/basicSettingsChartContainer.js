import {changeTypeChart, setTitle, setTitleAxisX, setTitleAxisY} from "../actions/basicSettingsChartActions";
import {connect} from "react-redux";
import {BasicSettingsChart} from "../components/BasicSettingsChart/BasicSettingsChart";

const mapStateToProps = state => {
    return {
        typeChart: state.typeChart,
        title: state.title,
        titleAxisX: state.titleAxisX,
        titleAxisY: state.titleAxisY,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setTitle: title => {
            dispatch(setTitle(title));
        },
        setTitleAxisX: titleAxis => {
            dispatch(setTitleAxisX(titleAxis));
        },
        setTitleAxisY: titleAxis => {
            dispatch(setTitleAxisY(titleAxis));
        },
        changeTypeChart: typeChart => {
            dispatch(changeTypeChart(typeChart));
        }
    }
};

export const BasicSettingsChartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BasicSettingsChart);