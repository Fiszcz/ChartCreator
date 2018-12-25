import React from 'react';
import {EditingPartWithStyle} from "./components/EditingPart/EditingPart";
import './App.css';
import Grid from "@material-ui/core/Grid";
import {ChartContainer} from "./containers/chartContainer";
import {AppBarContainer} from "./containers/appBarContainer";
import {withStyles} from "@material-ui/core";

const styles = {
    chartContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export class App extends React.Component {

    render() {
        const {classes} = this.props;

        return <div>
            <AppBarContainer/>
            <Grid container>
                <Grid item xs={6} className={classes.chartContainer}>
                    <ChartContainer/>
                </Grid>
                <Grid item xs={6}>
                    <EditingPartWithStyle/>
                </Grid>
            </Grid>
        </div>
    };
}

export const AppComponentWithStyle = withStyles(styles)(App);
