import {connect} from "react-redux";
import {SnackBarMessage} from "../components/SnackBar/SnackBar";

const mapStateToProps = state => {
    return {
        message: state.present.message.message,
        id: state.present.message.id,
    }
};

export const SnackBarMessageContainer = connect(
    mapStateToProps
)(SnackBarMessage);
