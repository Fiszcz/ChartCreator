import * as React from "react";
import classnames from "classnames";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ViewWeek from "@material-ui/icons/ViewWeek";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const styles = {
    rowAddIcon: {
        transform: 'rotate(90deg)',
    },
    icon: {
        marginRight: '5px',
    },
};

class DataTableHeader extends React.Component {

    render() {
        const {classes} = this.props;

        return <Grid container justify={"center"} spacing={16}>
            <Grid item xs={11} container spacing={16}>
                <Grid item xs={4}>
                    <Typography component="h2" variant="display1" gutterBottom>
                        Dane:
                    </Typography>
                </Grid>
                <Grid item xs={8} style={{textAlign: 'right'}}>
                    <Button color="inherit" className={classes.goBackButton} onClick={this.handleNewRow}>
                        <ViewWeek className={classnames(classes.icon, classes.rowAddIcon)}/>
                        Dodaj wiersz
                    </Button>
                    <Button color="inherit" className={classes.goBackButton} onClick={this.handleNewColumn}>
                        <ViewWeek className={classes.icon}/>
                        Dodaj kolumnę
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    }

    handleNewRow = () => {
        this.props.addNewRow();
    };

    handleNewColumn = () => {
        this.props.addNewColumn();
    };
}

export const DataTableHeaderWithStyle = withStyles(styles)(DataTableHeader);