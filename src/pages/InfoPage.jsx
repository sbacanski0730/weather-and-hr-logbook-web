import React, { useState, useEffect } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grow from '@mui/material/Grow';
import Zoom from '@mui/material/Zoom';

const InfoPage = () => {
	const [checkedGrow, setCheckedGrow] = useState(false);

	useEffect(() => {
		setCheckedGrow(true);
	}, []);

	return (
		<>
			<Grow in={checkedGrow} timeout={800}>
				<Container maxWidth='md' sx={{ backgroundColor: 'secondary.light' }}>
					<Paper
						square
						elevation={10}
						sx={{
							p: 2,
							transition: 'all 0.5s ease',
							'&:hover': { transform: 'scale(105%)' },
						}}
					>
						<Typography variant='h1' sx={{ textAlign: 'center' }}>
							WH-Logbook
						</Typography>
						<Typography
							variant='subtitle1'
							sx={{ textAlign: 'center', p: 4 }}
						>
							This project was created for the purpose of writing an
							engineering thesis. The aim of the project is to create an
							application that enables the creation, saving, editing and
							transfer of reports, which in their characteristics will refer
							to the logbook entries.
						</Typography>
						<Typography variant='subtitle2' sx={{ textAlign: 'center' }}>
							The author of the project is Szymon Bacański.
						</Typography>
						<Typography variant='subtitle2' sx={{ textAlign: 'center' }}>
							Project on Github:
							<Link
								component={ReactLink}
								to='https://github.com/sbacanski0730'
								variant='subtitle2'
								sx={{ ml: '4px', color: 'authLinkColor.main' }}
							>
								https://github.com/sbacanski0730
							</Link>
						</Typography>
					</Paper>
				</Container>
			</Grow>
		</>
	);
};

export default InfoPage;
