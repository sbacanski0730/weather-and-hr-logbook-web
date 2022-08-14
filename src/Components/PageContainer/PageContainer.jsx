import React from 'react';
import { PageContainerStyle } from './PageContainer.style';

const PageContainer = ({ children }) => {
	return (
		<>
			<PageContainerStyle>{children}</PageContainerStyle>
		</>
	);
};

export default PageContainer;
