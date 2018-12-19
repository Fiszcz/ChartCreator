import * as React from "react";
import Card from "@material-ui/core/es/Card/Card";
import {withStyles} from "@material-ui/core";
import 'handsontable-pro/dist/handsontable.full.css';
import { HotTable } from '@handsontable-pro/react';
import Button from "@material-ui/core/Button";
import ViewWeek from "@material-ui/icons/ViewWeek";
import classnames from "classnames";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FilledInput from "@material-ui/core/FilledInput";
import MenuItem from "@material-ui/core/MenuItem";

const styles = {
    card: {
        width: '100%',
        height: '40vh',
        backgroundColor: '#e3e3e3',
    },
    rowAddIcon: {
        transform: 'rotate(90deg)',
    },
    icon: {
        marginRight: '5px',
    }
};

class EditingPart extends React.Component {
    constructor(props) {
        super(props);
        this.data = [
            ["", "Ford", "Volvo", "Toyota", "Honda"],
            ["2016", 10, 11, 12, 13],
            ["2017", 20, 11, 14, 13],
            ["2018", 30, 15, 12, 13]
        ];
        this.hotSettings = {
            fixedColumnLeft: true,
            manualColumnResize: true,
            manualRowResize: true,
            fixedColumnTop: true,
            colHeaders: false,
            rowHeaders: false,
        }
    }

    render() {
        const {classes} = this.props;
        return <Card className={classes.card}>
            <Grid container justify={"center"} style={{marginTop: '12px', marginBottom: '10px'}}>
                <Grid item xs={7}>
                    <TextField
                        label="Tytuł wykresu"
                        style={{margin: 'auto'}}
                        placeholder="Wprowadź tytuł wykresu"
                        margin="normal"
                        fullWidth
                        variant={"filled"}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={3}>
                    <FormControl variant="filled" fullWidth>
                        <InputLabel htmlFor="filled-chart-type">Typ wykresu</InputLabel>
                        <Select
                            value={""}
                            input={<FilledInput name="chart" id="filled-chart-type" />}
                        >
                            <MenuItem value="">
                                <em>Nie wybrany</em>
                            </MenuItem>
                            <MenuItem value={'pie'}>Kołowy</MenuItem>
                            <MenuItem value={'bar'}>Słupkowy</MenuItem>
                            <MenuItem value={'linear'}>Liniowy</MenuItem>
                            <MenuItem value={'point'}>Punktowy</MenuItem>
                            <MenuItem value={'bar-vertical'}>Słupkowy (pionowy)</MenuItem>
                        </Select>
                    </FormControl>
            </Grid>
            </Grid>
            <Button color="inherit" className={classes.goBackButton}>
                <ViewWeek className={classnames(classes.icon, classes.rowAddIcon)}/>
                Dodaj nowy wiersz
            </Button>
            <Button color="inherit" className={classes.goBackButton}>
                <ViewWeek className={classes.icon}/>
                Dodaj nową kolumnę
            </Button>
            <div id="hot-app" style={{"margin": "20px"}}>
                <HotTable data={this.data} settings={this.hotSettings} width="80%" height="400" stretchH="all" />
            </div>
        </Card>;
    }
}

export const EditingPartWithStyle = withStyles(styles)(EditingPart);
