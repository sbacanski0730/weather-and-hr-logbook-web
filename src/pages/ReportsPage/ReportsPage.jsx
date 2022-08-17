import React from 'react';
import { ReportsPageStyle } from './ReportsPage.style';
import Report from '../../components/ReportComponent/Report';

import dummy_data from '../../assets/dummy-data.json';

const ReportsPage = () => {
	console.log(dummy_data);

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
							content={item.content}
						/>
					</>
				);
			})}

			<Report
				date={'2022-12-21'}
				time={'02:31'}
				temperature={'2'}
				sky_status={'rain'}
				wind_speed={'30'}
				pressure={'1022'}
				content={
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga mollitia quibusdam doloremque dicta! Veritatis assumenda nisi quisquam eaque modi nesciunt hic animi in odit, minus deleniti sit sequi perspiciatis vel dolore libero quo natus quibusdam id cupiditate? Consectetur, non animi!'
				}
			/>
			{/* <Report
				date={'2021-01-01'}
				time={'02:31'}
				temperature={'3'}
				sky_status={'rain'}
				wind_speed={'23'}
				pressure={'1006'}
				content={
					'A cos tam cos tam. Jakby niby cos a jednak niczego. Jakby było, a nie ma.'
				}
			/> */}
			{/* <Report
				date={'2021-11-09'}
				time={'01:09'}
				temperature={'4'}
				sky_status={'rain'}
				wind_speed={'21'}
				pressure={'900'}
				content={
					'Litwo ojczyzno moja. Ty jestes jak zdrowie. Ile się ciebie pamieta tyleź ciebie załuję.'
				}
			/> */}
			{/* <Report
				date={'2021-10-02'}
				time={'07:55'}
				temperature={'1'}
				sky_status={'rain'}
				wind_speed={'30'}
				pressure={'850'}
				content={'Miałem ja owieczkę małą. Śliczną, biała jak śnieg.'}
			/> */}
		</ReportsPageStyle>
	);
};

export default ReportsPage;
