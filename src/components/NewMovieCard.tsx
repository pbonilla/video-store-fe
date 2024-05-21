import React, { useState } from 'react';
import { Card, CardContent, Box, ButtonBase } from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import NewMovieModal from './NewMovieModal';

function NewMovieCard({ refreshMovies }){

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return(
    <>
      <Card sx={{ height: '250px',  backgroundColor: "#2E8BC0" }} onClick={handleClickOpen}>
        <ButtonBase sx={{ height: '100%', width: '100%'}}>
          <CardContent>
            <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" sx={{ height: '100%', fontSize: '35px'}}>
              <LibraryAddIcon fontSize="large" />
              <span> Add Movie</span>
            </Box>
          </CardContent>
        </ButtonBase>
      </Card>
      <NewMovieModal open={open} handleClose={handleClose} refreshMovies={refreshMovies} />
    </> 
  )
}

export default NewMovieCard;