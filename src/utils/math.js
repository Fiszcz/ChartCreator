function round(value, step) {
    step || (step = 1.0);
    let inv = 1.0 / step;
    return Math.round(value * inv) / inv;
}

export const getRandomNumber = () => {
    return round(Math.random()*25 + 1, 0.001);
};