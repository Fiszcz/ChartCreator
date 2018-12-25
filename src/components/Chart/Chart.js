import Grid from "@material-ui/core/Grid";
import Plot from "react-plotly.js";
import React from "react";

export class Chart extends React.Component {

    render() {
        return <Grid container style={{textAlign: 'center'}}>
            <Grid item xs={12}>
                <Plot
                    data={this.preparationDataToChart()}
                    layout={{
                        width: window.innerWidth / 2 - 8,
                        title: this.props.title || '',
                        yaxis: {title: this.props.titleAxisY},
                        xaxis: {title: this.props.titleAxisX},
                    }}
                />
            </Grid>
        </Grid>;
    }

    preparationDataToChart = () => {
        let generatorSet;
        switch (this.props.typeChart) {
            case 'pie':
                generatorSet = this.createPieChartSet;
                break;
            case 'linear':
                generatorSet = this.createLinearChartSet;
                break;
            case 'point':
                generatorSet = this.createPointChartSet;
                break;
            case 'bar-vertical':
                generatorSet = this.createBarChartSet;
                break;
            case 'bar-horizontal':
                generatorSet = this.createBarHorizontalChartSet;
                break;
        }

        let data = this.props.data;

        let x = [];
        for (let row = 2; row < data.length; row++) {
            x.push(data[row][1]);
        }

        let dataToChart = [];
        for (let column = 2; column < data[0].length; column++) {
            let y = [];
            for (let row = 2; row < data.length; row++) {
                y.push(data[row][column]);
            }
            dataToChart.push({...generatorSet(x, y, data[0][column], data), name: data[1][column]});
        }

        console.log(dataToChart);

        return dataToChart;
    };

    createPieChartSet = (x, y, color, data) => {
        let colors = [];
        for (let row = 2; row < data.length; row++)
            colors.push(data[row][0]);
        return {
            type: 'pie',
            values: y,
            labels: x,
            marker: {colors}
        };
    };

    createLinearChartSet = (x, y, color) => {
        return {
            type: 'scatter',
            x,
            y,
            line: {color},
        };
    };

    createBarChartSet = (x, y, color) => {
        return {
            type: 'bar',
            x,
            y,
            marker: {color}
        };
    };

    createBarHorizontalChartSet = (x, y, color) => {
        return {
            type: 'bar',
            x: y,
            y: x,
            orientation: 'h',
            marker: {color}
        };
    };

    createPointChartSet = (x, y, color) => {
        return {
            mode: 'markers',
            x,
            y,
            marker: {color},
        };
    };
}