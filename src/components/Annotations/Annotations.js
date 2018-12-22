import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

export class Annotations extends React.Component {

    state = {
        description: '',
        coordinateOy: '',
        coordinateOx: '',
    };

    render() {
        return <>
            <Grid container justify={"center"} spacing={16}>
                <Grid item xs={11} container spacing={16}>
                    <Grid item xs={7}>
                        <Typography component="h2" variant="display1" gutterBottom>
                            Adnotacje do wykresu:
                        </Typography>
                    </Grid>
                    <Grid item xs={5} style={{textAlign: 'right'}}>
                        <Button
                            color="primary"
                            variant={'contained'}
                            size="large"
                            disabled={!this.validate()}
                            onClick={this.handleAddAnnotation}
                        >
                            <AddIcon/>
                            Dodaj
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justify={"center"} style={{marginTop: '3px', marginBottom: '14px'}} spacing={16}>
                    <Grid item xs={11} container spacing={16}>
                        <Grid item xs={6}>
                            <TextField
                                label="Tekst adnotacji"
                                value={this.state.description}
                                style={{margin: 'auto'}}
                                placeholder="Wprowadź tekst adnotacji"
                                margin="normal"
                                fullWidth
                                variant={"outlined"}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.handleChangeDescription}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Współrzedna OX"
                                style={{margin: 'auto'}}
                                placeholder="Wartość"
                                margin="normal"
                                fullWidth
                                variant={"outlined"}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.handleChangeCoordinateOx}
                                type="number"
                                value={this.state.coordinateOx}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Współrzedna OY"
                                value={this.state.coordinateOy}
                                style={{margin: 'auto'}}
                                placeholder="Wartość"
                                margin="normal"
                                fullWidth
                                variant={"outlined"}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.handleChangeCoordinateOy}
                                type="number"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    }

    handleChangeDescription = (e) => {
        this.setState({description: e.target.value});
    };

    handleChangeCoordinateOx = (e) => {
        this.setState({coordinateOx: e.target.value});
    };

    handleChangeCoordinateOy = (e) => {
        this.setState({coordinateOy: e.target.value});
    };

    handleAddAnnotation = () => {
        this.props.addAnnotation(this.state.description, Number(this.state.coordinateOx), Number(this.state.coordinateOy));
        this.setState({description: '', coordinateOx: '', coordinateOy: ''})
    };

    validate = () => {
        return this.state.description && this.state.coordinateOy !=='' && this.state.coordinateOx !== '';
    };
}