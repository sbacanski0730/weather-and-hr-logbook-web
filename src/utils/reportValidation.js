const reportValidation = (report) => {
    if (!report.title) throw new Error('Report needs to have a title');

    if (!report.date) throw new Error('Report needs to have a date');

    if (!report.sky_status) throw new Error('Report needs to have a sky status');

    if (!report.ship_status) throw new Error('Report needs to have a ship status');

    if (!report.wind_speed) throw new Error('Report needs to have a wind speed');

    if (!/^\d+$/.test(report.wind_speed)) throw new Error('Wind speed has to be a number');

    if (!report.ship_localization) throw new Error('Report needs to have a ship localization');

    if (!report.startHarbour) throw new Error('Report needs to have a start harbour name');

    if (!report.destinationHarbour)
        throw new Error('Report needs to have a destination harbour name');
};

export default reportValidation;
