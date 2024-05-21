import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Stack } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import usePostHttp from '../hooks/usePostHttp';

function MovieCard({ movie }){
  const { data, sendRequest } = usePostHttp();
  const [isFavorite, setIsFavorite] = useState(false);
  const likesCounter = data?.likes || movie.likes;
  
  const handleClick = () => {
    const newValueIsFavorite = !isFavorite;
    const newLikesCount = newValueIsFavorite ? likesCounter + 1 : likesCounter - 1;
    sendRequest(`movies/${movie.id}`, 'PUT', { movie: { likes: newLikesCount }})
    setIsFavorite(newValueIsFavorite);
  }

  return(
    <Card sx={{height: '250px', backgroundColor: "#2E8BC0"}}>
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ height: '100%'}}>
        <CardContent>
          <Stack>
            <Typography gutterBottom variant="h4" component="div" align='center'>
              {movie.title}
            </Typography>
            <Button variant="text" onClick={handleClick}>
                <Box sx={{color: "#C40C0C"}}>
                  { isFavorite && <Favorite fontSize='large' />}
                  { !isFavorite && <FavoriteBorder fontSize='large' />}
                  <Typography variant="h4" component="div" sx={{ color: "black" }}>
                    {likesCounter}
                  </Typography>
                </Box>
            </Button>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
}

export default MovieCard;