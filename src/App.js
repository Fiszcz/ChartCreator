import React from 'react';
import {EditingPartWithStyle} from "./components/EditingPart/EditingPart";
import Plot from 'react-plotly.js';
import './App.css';
import Grid from "@material-ui/core/Grid";
import {AppBarWithStyle} from "./components/AppBar/AppBar";

export class App extends React.Component {

    render() {
        return <div>
            <AppBarWithStyle/>
            <Grid container>
                <Grid item xs={6}>
                    <Grid container style={{textAlign: 'center'}}>
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
                                layout={{title: 'A Fancy Plot'}}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <EditingPartWithStyle/>
                </Grid>
            </Grid>
        </div>
    };
}
