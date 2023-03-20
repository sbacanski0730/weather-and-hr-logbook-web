import React from 'react';
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import VisibilityIcon from '@mui/icons-material/Visibility';

const ReportPage = () => {
    const { reportId } = useParams();
    console.log(reportId);

    return (
        <>
            <Paper elevation={10} sx={{ backgroundColor: 'primary.light' }}>
                <Container
                    maxWidth="xl"
                    sx={{
                        // border: '1px solid #fff',
                        display: 'flex',
                        justifyContent: 'center',
                        height: '70vh',
                        p: 2,
                        minWidth: '80vw',
                    }}
                >
                    <Stack
                        direction="column"
                        sx={{
                            // border: '1px dotted yellow',
                            width: '100%',
                            p: 3,
                        }}
                        spacing={2}
                    >
                        <Grid
                            container
                            columns={12}
                            sx={{
                                // border: '1px solid orange',
                                width: '100%',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                p: 2,
                            }}
                        >
                            <Grid item xl={6}>
                                <Typography variant="h2">Lorem Title, ipsum dolor.</Typography>
                            </Grid>
                            <Grid item xl={6}>
                                <Typography variant="h4">13:45 24-04-2023</Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            columns={12}
                            sx={{
                                // border: '1px dashed orange',
                                width: '100%',
                                justifyContent: 'space-between',
                                px: 6,
                            }}
                        >
                            <Grid item xl={6}>
                                <Typography variant="h4">at sea</Typography>
                            </Grid>
                            <Grid item xl={6}>
                                <Typography variant="h4">sun</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4">4m/s</Typography>
                            </Grid>
                            <Grid item sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                                <Typography variant="h4"> 55.13126446 55.46468464</Typography>
                                <VisibilityIcon />
                            </Grid>
                        </Grid>
                        <Typography
                            variant="body1"
                            sx={{
                                // border: '1px solid pink',
                                maxHeight: '450px',
                                overflow: 'hidden',
                                overflowY: 'auto',
                                py: 1,
                                px: 3,
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis
                            eum, dolorum exercitationem necessitatibus numquam illum, nostrum,
                            eligendi expedita alias aliquam tenetur esse sed et. Facilis dolorum
                            sequi nihil culpa eligendi odio ut cum. Dolorem ipsam beatae harum ea
                            debitis deserunt laudantium nulla at modi iusto fuga id, eius hic itaque
                            ab qui. Rerum, consectetur? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Velit debitis eum, dolorum exercitationem Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Mollitia nihil beatae
                            doloribus modi eveniet est quae aperiam, corporis recusandae quos.
                            beatae doloribus modi eveniet est quae aperiam, corporis recusandae
                            quos. necessitatibus numquam illum, nostrum, eligendi expedita alias
                            aliquam tenetur esse sed et. Facilis dolorum sequi nihil culpa eligendi
                            odio ut cum. Dolorem ipsam beatae harum ea debitis deserunt laudantium
                            nulla at modi iusto fuga id, eius hic itaque ab qui. Rerum, consectetur?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis
                            eum, dolorum exercitationem necessitatibus numquam illum, nostrum,
                            eligendi expedita alias aliquam tenetur esse sed et. Facilis dolorum
                            sequi nihil culpa eligendi odio ut cum. Dolorem ipsam beatae harum ea
                            debitis deserunt laudantium nulla at modi iusto fuga id, eius hic itaque
                            ab qui. Rerum, consectetur? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Velit debitis eum, dolorum exercitationem
                            necessitatibus numquam illum, nostrum, eligendi expedita alias aliquam
                            tenetur esse sed et. Facilis dolorum sequi nihil culpa eligendi odio ut
                            cum. Dolorem ipsam beatae harum ea debitis deserunt laudantium nulla at
                            modi iusto fuga id, eius hic itaque ab qui. Rerum, consectetur? Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Velit debitis eum,
                            dolorum exercitationem necessitatibus numquam illum, nostrum, eligendi
                            expedita alias aliquam tenetur esse sed et. Facilis dolorum sequi nihil
                            culpa eligendi odio ut cum. Dolorem ipsam beatae harum ea debitis
                            deserunt laudantium nulla at modi iusto fuga id, eius hic itaque ab qui.
                            Rerum, consectetur? Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Velit debitis eum, dolorum exercitationem necessitatibus numquam
                            illum, nostrum, eligendi expedita alias aliquam tenetur esse sed et.
                            Facilis dolorum sequi nihil culpa eligendi odio ut cum. Dolorem ipsam
                            beatae harum ea debitis deserunt laudantium nulla at modi iusto fuga id,
                            eius hic itaque ab qui. Rerum, consectetur? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Velit debitis eum, dolorum exercitationem
                            necessitatibus numquam illum, nostrum, eligendi expedita alias aliquam
                            tenetur esse sed et. Facilis dolorum sequi nihil culpa eligendi odio ut
                            cum. Dolorem ipsam beatae harum ea debitis deserunt laudantium nulla at
                            modi iusto fuga id, eius hic itaque ab qui. Rerum, consectetur? Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Velit debitis eum,
                            dolorum exerci
                        </Typography>
                    </Stack>
                </Container>
            </Paper>
        </>
    );
};

export default ReportPage;
