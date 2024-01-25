import React,{useEffect, useState} from 'react'
import { Pagination } from '@mui/material/Pagination'
import { Box, Typography, Stack } from '@mui/material'
import { exercisesOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
function Exercises({setExercises, bodyPart, exercises}) {
  console.log(exercises)
  return (
    <Box id="exercises"
    sx={{mt:{lg:'110px'}}}
    mt='50px'
    p="20px"
    >
      <Typography variant='h3' mb='40px'>
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap:{lg:'110px', xs:'50px'}}} flexWrap="wrap" justifyContent="center">
          {exercises.map((exercise, index)=>(
                <ExerciseCard key={index} exercise={exercise}/>
                // <p> {exercise.name}</p>
          ))}
      </Stack>
    </Box>
  )
}

export default Exercises
