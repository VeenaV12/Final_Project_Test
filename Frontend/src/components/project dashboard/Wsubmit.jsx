import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Grid, LinearProgress, Paper, styled, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 5,
  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const createData = (week, status, mark, comments) => ({ week, status, mark, comments });

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  width: '100%',
  color: theme.palette.text.primary,
}));

const Wsubmit = () => {
  const theme = useTheme();
  const [rows, setRows] = useState([
    createData('Week 1', 'Graded', 85, 'Good progress'),
    createData('Week 2', 'Not Graded', null, 'Awaiting feedback'),
    createData('Week 3', 'Not Graded', null, 'Awaiting feedback'),
    createData('Week 4', 'Not Graded', null, 'Awaiting feedback'),  
    createData('Week 5', 'Not Graded', null, 'Awaiting feedback'),
    createData('Week 6', 'Not Graded', null, 'Awaiting feedback'),
    createData('final', 'Not Graded', null, 'Awaiting feedback'),
    createData('viva', 'Not Graded', null, 'Awaiting feedback'),
    // Add more rows as needed
  ]);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const gradedWeeks = rows.filter(row => row.status === 'Graded').length;
    const totalWeeks = rows.length;
    const progress = (gradedWeeks / totalWeeks) * 100;
    setProgressValue(progress);
  }, [rows]);

  return (
    <>
    <Breadcrumbs/>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '100vh',
        // marginleft:"20%",
        px: { xs: 2, sm: 3, md: 5 },
      }}
    >
      <Grid lg={12} container justifyContent="center" alignItems="center" spacing={2} style={{marginTop:"13%",marginRight:"4%"}}>
        <Grid item xs={11} md={8}>
          <StyledPaper sx={{ my: 1, p: 2, background: 'lightgray' }}>
            <Typography>
              <Box sx={{ width: '100%' }}>
                <Typography variant="subtitle1" gutterBottom>
                  Progress based on Graded Projects:
                </Typography>
                <BorderLinearProgress variant="determinate" value={progressValue} />
              </Box>
            </Typography>
          </StyledPaper>
        </Grid>

        {/* <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'lightblue',
              width: '65.5%',
              marginLeft:"3.3%"
            }}
          >   */}
          <Grid item xs={11} md={8}>
            <StyledPaper sx={{ my: 1, p: 2 }}>
              <Typography noWrap>
                <SimpleTreeView>
                  <TreeItem itemId="grid" label="Week 1">
                    <TreeItem
                      nodeId="grid-community"
                      label={
                        <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'justify' }}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                      }
                      sx={{ marginBottom: 2 }}
                    />
                    <Link to={'/wsubmitlink1'} style={{ textDecoration: 'none' }}>
                      <TreeItem itemId="grid-community" label="submit" />
                    </Link>
                    <TreeItem itemId="grid-premium" label="Status: Graded" />
                  </TreeItem>
                </SimpleTreeView>
              </Typography>
            </StyledPaper>
          </Grid>

          <Grid item xs={11} md={8}>
            <StyledPaper sx={{ my: 1, p: 2 }}>
              <Typography noWrap>
                <SimpleTreeView>
                  <TreeItem itemId="grid" label="Week 2">
                    <TreeItem
                      nodeId="grid-community"
                      label={
                        <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'justify' }}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                      }
                      sx={{ marginBottom: 2 }}
                    />
                    <Link to={'/wsubmitlink2'} style={{ textDecoration: 'none' }}>
                      <TreeItem itemId="grid-community" label="submit" />
                    </Link>
                    <TreeItem itemId="grid-premium" label="Status: Not Graded" />
                  </TreeItem>
                </SimpleTreeView>
              </Typography>
            </StyledPaper>
          </Grid>

          <Grid item xs={11} md={8}>
            <StyledPaper sx={{ my: 1, p: 2 }}>
              <Typography>
                <SimpleTreeView>
                  <TreeItem itemId="grid" label="Week 3">
                    <TreeItem
                      nodeId="grid-community"
                      label={
                        <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'justify' }}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                      }
                      sx={{ marginBottom: 2 }}
                    />
                    <Link to={'/wsubmitlink3'} style={{ textDecoration: 'none' }}>
                      <TreeItem itemId="grid-community" label="submit" />
                    </Link>
                    <TreeItem itemId="grid-premium" label="Status: Not Graded" />
                  </TreeItem>
                </SimpleTreeView>
              </Typography>
            </StyledPaper>
          </Grid>

          <Grid item xs={11} md={8}>
            <StyledPaper sx={{ my: 1, p: 2 }}>
              <Typography>
                <SimpleTreeView>
                  <TreeItem itemId="grid" label="Week 4">
                    <TreeItem
                      nodeId="grid-community"
                      label={
                        <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'justify' }}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                      }
                      sx={{ marginBottom: 2 }}
                    />
                    <Link to={'/wsubmitlink4'} style={{ textDecoration: 'none' }}>
                      <TreeItem itemId="grid-community" label="submit" />
                    </Link>
                    <TreeItem itemId="grid-premium" label="Status: Graded" />
                  </TreeItem>
                </SimpleTreeView>
              </Typography>
            </StyledPaper>
          </Grid>

          <Grid item xs={11} md={8}>
            <StyledPaper sx={{ my: 1, p: 2 }}>
              <Typography>
                <SimpleTreeView>
                  <TreeItem itemId="grid" label="Week 5">
                    <TreeItem
                      nodeId="grid-community"
                      label={
                        <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'justify' }}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                      }
                      sx={{ marginBottom: 2 }}
                    />
                    <Link to={'/wsubmitlink5'} style={{ textDecoration: 'none' }}>
                      <TreeItem itemId="grid-community" label="submit" />
                    </Link>
                    <TreeItem itemId="grid-premium" label="Status: Graded" />
                  </TreeItem>
                </SimpleTreeView>
              </Typography>
            </StyledPaper>
          </Grid>

          <Grid item xs={11} md={8}>
            <StyledPaper sx={{ my: 1, p: 2 }}>
              <Typography>
                <SimpleTreeView>
                  <TreeItem itemId="grid" label="Week 6">
                    <TreeItem
                      nodeId="grid-community"
                      label={
                        <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'justify' }}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                      }
                      sx={{ marginBottom: 2 }}
                    />
                    <Link to={'/wsubmitlink6'} style={{ textDecoration: 'none' }}>
                      <TreeItem itemId="grid-community" label="submit" />
                    </Link>
                    <TreeItem itemId="grid-premium" label="Status: Graded" />
                  </TreeItem>
                </SimpleTreeView>
              </Typography>
            </StyledPaper>
          </Grid>
        {/* </Box> */}

        <Grid item xs={11} md={8}>
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'lightblue',
              width: '100%',
            }}
          >
            <Paper sx={{ my: 1, p: 2 }}>
              <Typography>
                <SimpleTreeView>
                  <TreeItem itemId="grid" label="Final Report">
                    <TreeItem
                      nodeId="grid-community"
                      label={
                        <div
                          style={{
                            whiteSpace: 'normal',
                            wordBreak: 'break-word',
                            textAlign: 'justify',
                          }}
                        >
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                      }
                      sx={{ marginBottom: 2 }}
                    />
                    <Link to={'/fsubmit'} style={{ textDecoration: 'none' }}>
                      <TreeItem itemId="grid-community" label="submit" />
                    </Link>
                    <TreeItem itemId="grid-premium" label="Status: Graded" />
                  </TreeItem>
                </SimpleTreeView>
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={11} md={8}>
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'lightblue',
              width: '100%',
            }}
          >
            <Paper sx={{ my: 1, p: 2 }}>
              <Typography>
                <SimpleTreeView>
                  <TreeItem itemId="grid" label="Viva Voce">
                    <TreeItem
                      nodeId="grid-community"
                      label={
                        <div
                          style={{
                            whiteSpace: 'normal',
                            wordBreak: 'break-word',
                            textAlign: 'justify',
                          }}
                        >
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                      }
                      sx={{ marginBottom: 2 }}
                    />
                    <Link to={'/vivavoce'} style={{ textDecoration: 'none' }}>
                      <TreeItem itemId="grid-community" label="submit" />
                    </Link>
                    <TreeItem itemId="grid-premium" label="Status: Graded" />
                  </TreeItem>
                </SimpleTreeView>
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default Wsubmit;
