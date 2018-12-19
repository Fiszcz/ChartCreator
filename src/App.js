import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';
import SaveIcon from '@material-ui/icons/Save';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {EditingPartWithStyle} from "./components/EditingPart";
import Plot from 'react-plotly.js';
import './App.css';

const styles = {
    goBackButton: {
        marginLeft: '20px',
    },
    icon: {
        marginRight: '5px',
    }
};

function ButtonAppBar(props) {
    const {classes} = props;
    return (
        <div>
            <AppBar position="static">
                <Toolbar style={{'flexGrow': 1}}>
                    <Typography variant="h6" color="inherit">
                        Charts Project
                    </Typography>
                    <div style={{'flexGrow': 1, 'justifyContent': 'start'}}>
                        <Button color="inherit" className={classes.goBackButton}><UndoIcon className={classes.icon}/>Cofnij
                            operację</Button>
                    </div>
                    <div>
                        <Button color="inherit" className={classes.goBackButton}>
                            <ArrowDownwardIcon className={classes.icon}/>
                            Importuj dane z CSV
                        </Button>
                        <Button color="inherit" className={classes.goBackButton}>
                            <SaveIcon className={classes.icon}/>
                            Zapisz jako CSV
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <EditingPartWithStyle/>
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
                layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
            />
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export const App = withStyles(styles)(ButtonAppBar);