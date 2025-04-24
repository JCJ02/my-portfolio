const yearToday = () => {
    const today = new Date();

    const year = today.getFullYear();

    return year;
}

export {
    yearToday
}