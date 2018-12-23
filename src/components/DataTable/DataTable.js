import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import classnames from "classnames";
import {HotTable} from "@handsontable-pro/react";
import * as React from "react";
import ViewWeek from "@material-ui/icons/ViewWeek";
import {withStyles} from "@material-ui/core";

const styles = {
    rowAddIcon: {
        transform: 'rotate(90deg)',
    },
    icon: {
        marginRight: '5px',
    }
};

class DataTable extends React.Component {

    constructor(props) {
        super(props);
        this.hotSettings = {
            fixedColumnLeft: true,
            manualColumnResize: true,
            manualRowResize: true,
            fixedColumnTop: true,
            rowHeaders: (index) => {
                if (index === 0)
                    return "";
                else if (index === 1)
                    return "";
                else
                    return index - 1;
            },
            colHeaders: (index) => {
                if (index === 0)
                    return "";
                else if (index === 1)
                    return "";
                else
                    return String.fromCharCode(index + 63);
            },
            height: 300,
            colWidths: [16],
            rowHeaderWidth: 40,
            cells: (row, col) => {
                let cellProperties = {};

                if (row === 0 || col === 0) {
                    cellProperties.readOnly = true;
                }
                if ((row > 1 && col === 0) || (col > 1 && row === 0)) {
                    cellProperties.renderer = this.renderColor;
                }
                if ((row === 1 && col > 0) || (col === 1 && row > 0)) {
                    cellProperties.renderer = this.accentForHeaders;
                }

                return cellProperties;
            },
        };
        this.hotTableComponent = React.createRef();
    }

    render() {
        const {classes} = this.props;

        return <>
            <Grid container justify={"center"} spacing={16}>
                <Grid item xs={11} container spacing={16}>
                    <Grid item xs={6}>
                        <Typography component="h2" variant="display1" gutterBottom>
                            Dane do wykresu:
                        </Typography>
                    </Grid>
                    <Grid item xs={6} style={{textAlign: 'right'}}>
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
            <Grid container justify={"center"} spacing={16}>
                <Grid item xs={11} container spacing={16}>
                    <Grid item xs={12}>
                        <div id="hot-app" style={{overflow: 'hidden'}}>
                            <HotTable ref={this.hotTableComponent} data={this.props.data} settings={this.hotSettings}
                                      width="80%"
                                      stretchH="all"/>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </>;
    }

    handleNewRow = () => {
        this.props.addNewRow();
    };

    handleNewColumn = () => {
        this.props.addNewColumn();
    };

    renderColor = (instance, td, row, col, prop, value, cellProperties) => {
        td.style.background = value;
    };

    accentForHeaders = (instance, td, row, col, prop, value, cellProperties) => {
        td.style.background = "#00000020";
        td.textContent = value;
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.exportCSV){
            const exportPlugin = this.hotTableComponent.current.hotInstance.getPlugin('exportFile');
            exportPlugin.downloadFile('csv', {
                bom: false,
                columnDelimiter: ',',
                columnHeaders: false,
                fileExtension: 'csv',
                filename: 'Charts-project_[YYYY]-[MM]-[DD]',
                mimeType: 'text/csv',
                rowDelimiter: '\r\n',
                range: [1, 1, this.props.data.length - 1, this.props.data[0].length - 1],
                rowHeaders: false
            });
            this.props.endExportCSV();

            return false;
        }
        return true;
    }

}

export const DataTableWithStyle = withStyles(styles)(DataTable);