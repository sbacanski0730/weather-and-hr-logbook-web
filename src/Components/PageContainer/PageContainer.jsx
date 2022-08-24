import React from 'react';
import { PageContainerStyle } from './PageContainer.style';

const PageContainer = ({ children }) => {
	return (
		<>
			<PageContainerStyle>
				<div className='page-container-wrapper'>
					{/* just for testing reasons */}
					{/* <div className='dummy-div'>{children}</div> */}
					{children}
				</div>
			</PageContainerStyle>
		</>
	);
};

export default PageContainer;
