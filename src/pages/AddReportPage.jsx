import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

const AddReport = () => {
	return (
		<>
			<Container
				sx={{
					border: '1xp solid white',
					flex: 'display',
					flexDirection: 'column',
				}}
			>
				<Grid
					container
					// spacing={2}
					// columnSpacing={2}
					direction='row'
					// sx={{ border: '1px solid #ffffff', p: 2 }}
				>
					<Grid item xs={6} sx={{ border: '1px solid orange' }}>
						{/* LEFT */}
						<Box>
							<TextField
								autoFocus
								fullWidth
								label='Title'
								variant='outlined'
								// variant='standard'
							/>
						</Box>
						<Box>
							<TextField
								label='Second row'
								variant='outlined'
								// variant='standard'
							/>
						</Box>
					</Grid>
					<Divider />
					<Grid item xs={6} sx={{ border: '1px solid lightgreen' }}>
						{/* RIGHT */}
						<TextField
							fullWidth
							multiline
							label='Content'
							variant='outlined'
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default AddReport;
