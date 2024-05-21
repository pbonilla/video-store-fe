import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import usePostHttp from '../hooks/usePostHttp';

function NewMovieModal({ open, handleClose, refreshMovies }){

  const { sendRequest } = usePostHttp();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData).entries());
          sendRequest('movies', 'POST', { movie: formJson });
          refreshMovies();
          handleClose();
        },
      }}
    >
      <DialogTitle>New Movie</DialogTitle>
      <DialogContent sx={{minWidth: '320px'}}>
        <TextField
          autoFocus
          required
          margin="dense"
          id="title"
          name="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewMovieModal;