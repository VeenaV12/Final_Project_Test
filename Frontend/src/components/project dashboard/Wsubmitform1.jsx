import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Breadcrumbs from '../Breadcrumbs';

const Wsubmitform1 = () => {
  const [form, setForm] = useState({
    image: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', form);
  };

  return (
    <>
    <Breadcrumbs/>
    <Grid container justifyContent="center" style={{ marginTop: "13%" }}>
      <Grid item xs={12} md={10} lg={8}>
        <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
          <Typography variant="h6" style={{ padding: "10px" }}>
            <b>Submission Form</b>
          </Typography>
          <Table sx={{ minWidth: 650 }} aria-label="submission 1 table">
            <TableBody>
              
              <TableRow>
                <TableCell component="th" scope="row">Online text</TableCell>
                <TableCell align="left">
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      id="outlined-image-url"
                    //   label="Image URL"
                      name="image"
                      value={form.image}
                      onChange={handleChange}
                    />
                  </Grid>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Submission comments</TableCell>
                <TableCell align="left">
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      id="outlined-image-url"
                    //   label="Image URL"
                      name="image"
                      value={form.image}
                      onChange={handleChange}
                    />
                  </Grid>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                </TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
    </>
  );
}

export default Wsubmitform1;
