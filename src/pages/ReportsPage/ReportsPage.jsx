import React from 'react';
import { ReportsPageStyle } from './ReportsPage.style';
import Report from '../../components/ReportComponent/Report';

import dummy_data from '../../assets/dummy-data.json';

const ReportsPage = () => {
	// console.table(dummy_data);

	return (
		<ReportsPageStyle>
			{dummy_data.map((item, index) => {
				return (
					<>
						<Report
							key={index}
							date={item.date}
							time={item.time}
							temperature={item.temperature}
							sky_status={item.sky_status}
							wind_speed={item.wind_speed}
							pressure={item.pressure}
							report_content={item.content}
						/>
					</>
				);
			})}
		</ReportsPageStyle>
	);
};

export default ReportsPage;
