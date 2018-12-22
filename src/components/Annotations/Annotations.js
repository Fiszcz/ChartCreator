import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export class Annotations extends React.Component {

    render() {
        return <>
            <Grid container justify={"center"} spacing={16}>
                <Grid item xs={11} container spacing={16}>
                    <Grid item xs={12}>
                        <Typography component="h2" variant="display1" gutterBottom>
                            Dodaj adnotację do wykresu:
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify={"center"} style={{marginTop: '3px', marginBottom: '14px'}} spacing={16}>
                <Grid item xs={11} container spacing={16}>
                    <Grid item xs={6}>
                        <TextField
                            label="Tekst adnotacji"
                            value={""}
                            style={{margin: 'auto'}}
                            placeholder="Wprowadź tekst adnotacji"
                            margin="normal"
                            fullWidth
                            variant={"outlined"}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleChangeTitleAxisX}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            label="Współrzedna OY"
                            value={""}
                            style={{margin: 'auto'}}
                            placeholder="Wartość"
                            margin="normal"
                            fullWidth
                            variant={"outlined"}
                            InputLabelProps={{
                                shrink: true,
                            }}
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
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    }
}