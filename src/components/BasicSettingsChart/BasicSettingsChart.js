import * as React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";

export class BasicSettingsChart extends React.Component {

    state = {
        title: this.props.title || "",
        titleAxisX: this.props.titleAxisX || "",
        titleAxisY: this.props.titleAxisY || "",
        typeChart: this.props.typeChart || ""
    };

    render() {
        return <>
            <Grid item xs={11}>
                <TextField
                    label="Tytuł wykresu"
                    value={this.state.title}
                    style={{margin: 'auto'}}
                    placeholder="Wprowadź tytuł wykresu"
                    margin="normal"
                    fullWidth
                    variant={"outlined"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.handleChangeTitle}
                />
            </Grid>
            <Grid container justify={"center"} style={{marginTop: '3px', marginBottom: '14px'}} spacing={16}>
                <Grid item xs={11} container spacing={16}>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-chart-type">Typ wykresu</InputLabel>
                            <Select
                                value={this.state.typeChart}
                                input={<OutlinedInput name="chart" id="outlined-chart-type"/>}
                                onChange={this.handleChangeTypeChart}
                            >
                                <MenuItem value="">
                                    <em>Nie wybrany</em>
                                </MenuItem>
                                <MenuItem value={'pie'}>Kołowy</MenuItem>
                                <MenuItem value={'linear'}>Liniowy</MenuItem>
                                <MenuItem value={'point'}>Punktowy</MenuItem>
                                <MenuItem value={'bar-vertical'}>Słupkowy (pionowy)</MenuItem>
                                <MenuItem value={'bar-horizontal'}>Słupkowy (poziomy)</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Etykieta osi X"
                            value={this.state.titleAxisX}
                            style={{margin: 'auto'}}
                            placeholder="Wprowadź nazwę etykiety osi X"
                            margin="normal"
                            fullWidth
                            variant={"outlined"}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleChangeTitleAxisX}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Etykieta osi Y"
                            value={this.state.titleAxisY}
                            style={{margin: 'auto'}}
                            placeholder="Wprowadź nazwę etykiety osi Y"
                            margin="normal"
                            fullWidth
                            variant={"outlined"}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleChangeTitleAxisY}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    }

    handleChangeTitle = (e) => {
        const editedTitle = e.target.value;
        this.props.setTitle(editedTitle);
        this.setState({title: editedTitle})
    };

    handleChangeTitleAxisX = (e) => {
        const editedTitle = e.target.value;
        this.props.setTitleAxisX(editedTitle);
        this.setState({titleAxisX: editedTitle})
    };

    handleChangeTitleAxisY = (e) => {
        const editedTitle = e.target.value;
        this.props.setTitleAxisY(editedTitle);
        this.setState({titleAxisY: editedTitle})
    };

    handleChangeTypeChart = (e) => {
        const selectedTypeChart = e.target.value;
        this.props.changeTypeChart(selectedTypeChart);
        this.setState({typeChart: selectedTypeChart});
    };
}