import React from 'react';
import {EditingPartWithStyle} from "./components/EditingPart/EditingPart";
import './App.css';
import Grid from "@material-ui/core/Grid";
import {ChartContainer} from "./containers/chartContainer";
import {AppBarContainer} from "./containers/appBarContainer";

export class App extends React.Component {

    render() {
        return <div>
            <AppBarContainer/>
            <Grid container>
                <Grid item xs={6}>
                    <ChartContainer/>
                </Grid>
                <Grid item xs={6}>
                    <EditingPartWithStyle/>
                </Grid>
            </Grid>
        </div>
    };
}
