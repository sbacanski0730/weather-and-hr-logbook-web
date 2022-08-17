import React from 'react';
import { ReportStyle } from './Report.style';
import { FaWind, FaTrash } from 'react-icons/fa';

const Report = ({
	date,
	time,
	temperature,
	sky_status,
	wind_speed,
	pressure,
	content,
}) => {
	return (
		<ReportStyle>
			<p className='element'>{date}</p>
			<p className='element'>{temperature} &#176;C</p>
			<FaWind className='element' />
			<p className='element'>{wind_speed} km/h</p>
			<p className='element'>{pressure} haP</p>
			<p className='element content'>{content}</p>
			<FaTrash className='element' />
		</ReportStyle>
	);
};

export default Report;
