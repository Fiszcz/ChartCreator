import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import SaveIcon from "@material-ui/icons/Save";
import UndoIcon from "@material-ui/icons/Undo";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {withStyles} from "@material-ui/core";

const styles = {
    goBackButton: {
        marginLeft: '20px',
    },
    icon: {
        marginRight: '5px',
    }
};

class ApplicationBar extends React.Component {

    render() {
        const {classes} = this.props;

        return <AppBar position="static" style={{marginBottom: '5px'}}>
            <Toolbar style={{'flexGrow': 1}}>
                <Typography variant="h6" color="inherit">
                    Charts Project
                </Typography>
                <div style={{'flexGrow': 1, 'justifyContent': 'start'}}>
                    <Button color="inherit" className={classes.goBackButton} disabled={!this.props.canUndo} onClick={this.props.onUndo}>
                        <UndoIcon className={classes.icon}/>
                        Cofnij operację
                    </Button>
                </div>
                <div>
                    <input
                        accept=".csv"
                        id="file-input"
                        type="file"
                        style={{display: 'none'}}
                        onChange={this.handleFileSelect}
                    />
                    <label htmlFor="file-input">
                        <Button color="inherit" component="span" className={classes.goBackButton}>
                            <ArrowDownwardIcon className={classes.icon}/>
                            Importuj dane z CSV
                        </Button>
                    </label>
                    <Button color="inherit" className={classes.goBackButton} onClick={this.handleExportCSV}>
                        <SaveIcon className={classes.icon}/>
                        Zapisz jako CSV
                    </Button>
                </div>
            </Toolbar>
        </AppBar>;
    }

    handleFileSelect = (event) => {
        const file = event.target.files[0];
        this.props.importFileContent(file);
    }

    handleExportCSV = () => {
        this.props.initExportCSV();
    }
}

export const AppBarWithStyle = withStyles(styles)(ApplicationBar);