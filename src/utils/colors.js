export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const addColorsToRows = (data) => {
    return data.map((row, index) => {
        if (index === 0)
            row.unshift("");
        else
            row.unshift(getRandomColor());
        return row;
    });
};

export const addColorsToColumns = (data) => {
    let rowWithColors = ["", ""];
    for (let i = data[0].length; i > 2; i--)
        rowWithColors.push(getRandomColor());
    data.unshift(rowWithColors);
    return data;
};

