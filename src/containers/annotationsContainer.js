import {Annotations} from "../components/Annotations/Annotations";
import {addAnnotation} from "../actions/annotationsActions";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        addAnnotation: (description, coordinateOx, coordinateOy) => {
            dispatch(addAnnotation(description, coordinateOx, coordinateOy));
        },
    }
};

export const AnnotationsContainer = connect(
    null,
    mapDispatchToProps
)(Annotations);