import React from 'react';
import {EditingPartWithStyle} from "./components/EditingPart/EditingPart";
import Plot from 'react-plotly.js';
import './App.css';
import Grid from "@material-ui/core/Grid";
import {AppBarWithStyle} from "./components/AppBar/AppBar";
import {Chart} from "./components/Chart/Chart";

export class App extends React.Component {

    render() {
        return <div>
            <AppBarWithStyle/>
            <Grid container>
                <Grid item xs={6}>
                    <Chart/>
                </Grid>
                <Grid item xs={6}>
                    <EditingPartWithStyle/>
                </Grid>
            </Grid>
        </div>
    };
}
