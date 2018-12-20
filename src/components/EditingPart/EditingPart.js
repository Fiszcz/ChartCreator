import * as React from "react";
import Card from "@material-ui/core/es/Card/Card";
import {withStyles} from "@material-ui/core";
import 'handsontable-pro/dist/handsontable.full.css';
import Grid from "@material-ui/core/Grid";
import {DataTableWithStyle} from "../DataTable/DataTable";
import {BasicSettingsChartContainer} from "../../containers/basicSettingsChartContainer";

const styles = {
    card: {
        width: '100%',
        // height: '40vh',
        backgroundColor: '#e3e3e3d6',
        marginBottom: '3px',
    },
};

class EditingPart extends React.Component {

    render() {
        const {classes} = this.props;

        return <Card className={classes.card}>
            <Grid container justify={"center"} style={{marginTop: '12px', marginBottom: '10px'}} spacing={16}>
                <BasicSettingsChartContainer/>
                <DataTableWithStyle/>
            </Grid>
        </Card>;
    }
}

export const EditingPartWithStyle = withStyles(styles)(EditingPart);
