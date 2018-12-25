import Grid from "@material-ui/core/Grid";
import {HotTable} from "@handsontable-pro/react";
import * as React from "react";
import {withStyles} from "@material-ui/core";
import {SketchPicker} from 'react-color';
import './dataTable.css';
import {DataTableHeaderWithStyle} from "./DataTableHeader";

const styles = {
    cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        backgroundColor: '#000000a6',
    },
    colorPickerFrame: {
        position: 'absolute',
        top: 0,
        zIndex: 1000,
        textAlign: 'center',
        left: 0,
        right: 0,
    }
};

class DataTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpenedColorPicker: false,
            editedColor: '',
            editedCell: {
                row: 0,
                column: 0
            }
        };

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
            afterSelection: (row, column, row2, column2, preventScrolling, selectionLayerLevel) => {
                if ((row === 0 && column > 1) || (column === 0 && row > 1))
                    this.setState({
                        isOpenedColorPicker: true,
                        editedColor: this.props.data[row][column],
                        editedCell: {row, column}
                    });
            },
            afterChange: (changes) => {
                if (changes)
                    this.props.changeData(changes);
            },
        };
        this.hotTableComponent = React.createRef();
    }

    render() {
        const {classes} = this.props;

        return <>
            <DataTableHeaderWithStyle {...this.props}/>
            <Grid container justify={"center"} spacing={16} style={{marginBottom: '10px'}}>
                <Grid item xs={11} container spacing={16}>
                    <Grid item xs={12}>
                        <div id="hot-app" style={{overflow: 'hidden', position: 'relative', height: 'calc(100vh - 520px)'}}>
                            <HotTable
                                ref={this.hotTableComponent}
                                data={this.props.data}
                                settings={this.hotSettings}
                                stretchH="all"
                            />
                            {this.state.isOpenedColorPicker && <div className={classes.colorPickerFrame}>
                                <div className={classes.cover} onClick={this.handleCloseColorPicker}/>
                                <SketchPicker
                                    disableAlpha={true}
                                    color={this.state.editedColor}
                                    onChangeComplete={this.handleChangeColorComplete}
                                />
                            </div>
                            }
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </>;
    }

    handleChangeColorComplete = (color) => {
        this.setState({editedColor: color.hex});
    };

    handleCloseColorPicker = () => {
        this.setState({isOpenedColorPicker: false});

        let editedCell = this.state.editedCell;
        this.props.changeColor(editedCell.row, editedCell.column, this.state.editedColor);
    };

    renderColor = (instance, td, row, col, prop, value, cellProperties) => {
        td.style.background = value;
    };

    accentForHeaders = (instance, td, row, col, prop, value, cellProperties) => {
        td.style.background = "#00000020";
        td.textContent = value;
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.exportCSV) {
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