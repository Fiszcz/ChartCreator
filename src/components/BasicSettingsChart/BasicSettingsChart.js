import * as React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";

export class BasicSettingsChart extends React.Component {

    render() {
        return <>
            <Grid item xs={11}>
                <TextField
                    label="Tytuł wykresu"
                    style={{margin: 'auto'}}
                    placeholder="Wprowadź tytuł wykresu"
                    margin="normal"
                    fullWidth
                    variant={"outlined"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid container justify={"center"} style={{marginTop: '3px', marginBottom: '14px'}} spacing={16}>
                <Grid item xs={11} container spacing={16}>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-chart-type">Typ wykresu</InputLabel>
                            <Select
                                value={""}
                                input={<OutlinedInput name="chart" id="outlined-chart-type"/>}
                            >
                                <MenuItem style={{paddingLeft: 0, paddingRight: 0}} value="">
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
                    <Grid item xs={6}>
                        <TextField
                            label="Etykieta osi X"
                            style={{margin: 'auto'}}
                            placeholder="Wprowadź nazwę etykiety osi X"
                            margin="normal"
                            fullWidth
                            disabled
                            variant={"outlined"}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Etykieta osi Y"
                            style={{margin: 'auto'}}
                            placeholder="Wprowadź nazwę etykiety osi Y"
                            margin="normal"
                            disabled
                            fullWidth
                            variant={"outlined"}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    }
}