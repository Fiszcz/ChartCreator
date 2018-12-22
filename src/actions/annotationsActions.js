export const ADD_ANNOTATION = "ADD_ANNOTATION";

export function addAnnotation(description, coordinateOx, coordinateOy) {
    return { type: ADD_ANNOTATION, annotation: {description, coordinateOx, coordinateOy} }
}
