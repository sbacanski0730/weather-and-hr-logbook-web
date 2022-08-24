import React, { useState } from 'react';
import { ReportStyle } from './Report.style';
import { FaWind, FaTrash, FaEdit } from 'react-icons/fa';

const Report = ({
	date,
	time,
	temperature,
	sky_status,
	wind_speed,
	pressure,
	report_content,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ReportStyle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
			<div className='report-data'>
				<p>{date}</p>
				<p>{temperature}°C</p>
				<div className='icon'>
					<FaWind />
				</div>
				<p>{wind_speed}km/h</p>
				<p>{pressure}haP</p>
			</div>
			<div className='report-content'>
				<p>{report_content}</p>
			</div>
			<div className='left-icons'>
				<FaTrash className='edit-icon' />
				<FaEdit className='edit-icon' id='icon' />
			</div>
		</ReportStyle>
	);
};

export default Report;
