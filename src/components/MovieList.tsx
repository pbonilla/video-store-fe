'use client';
import React from 'react';
import Grid from '@mui/material/Grid';
import NewMovieCard from './NewMovieCard';
import MovieCard from './MovieCard';
import useGetHttp from '../hooks/useGetHttp';

function MovieList(){

  const { data, loading, refetch } = useGetHttp("movies");

  if(loading) return null;
  
  return(
    <div>
      <h1> Available Movies </h1>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <NewMovieCard refreshMovies={refetch}/>
        </Grid>
        { data && data.map((movie) => 
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <MovieCard movie={movie}/>
          </Grid>
        )}
      </Grid>
    </div>
    
  )
}

export default MovieList;
