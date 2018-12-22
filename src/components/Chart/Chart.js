import Grid from "@material-ui/core/Grid";
import Plot from "react-plotly.js";
import React from "react";

export class Chart extends React.Component {

    render() {
        return <Grid container style={{textAlign: 'center'}}>
            <Grid item xs={12}>
                <Plot
                    data={[
                        {
                            x: [1, 2, 3],
                            y: [2, 6, 3],
                            type: 'scatter',
                            mode: 'lines+points',
                            marker: {color: 'red'},
                        },
                        {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                    ]}
                    layout={{
                        title: this.props.title || '',
                        yaxis: {title: this.props.titleAxisY},
                        xaxis: {title: this.props.titleAxisX},
                    }}
                />
            </Grid>
        </Grid>;
    }
}