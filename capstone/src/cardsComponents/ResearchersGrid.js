import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResearcherCard from './ResearcherCard';
import {useState, useEffect } from 'react'
import Axios from 'axios'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function ResearchersGrid({searchValue}) {
  console.log(searchValue)
  const [listOfResearchers, setListOfResearchers] = useState([])
  const [listOfResearchersSearched, setListOfResearchersSearched] = useState([])
  useEffect(() => {
    
    Axios.get("http://localhost:3000/researchers").then((response) => {
      setListOfResearchers(response.data)
      console.log(response.data)
    })
  },[])

  // let searchedResearchers = listOfResearchers.filter(researcher => researcher.surname.includes(searchValue));
 // setListOfResearchersSearched(searchedResearchers)
 // console.log(searchedResearchers)
//.filter(itemFilter => itemFilter.surname.toLowerCase().includes(searchValue.toLowerCase()))
 


  return (
    <Box sx={{ flexGrow: 1 , padding:5}}>
        
      <Grid container spacing={2}>
        
          
        

        {
          /*listOfResearchers.filter(itemFilter => itemFilter.Surname.toLowerCase().includes(searchValue.toLowerCase())).map(researcherItem => (
            <Grid item xs={3} key={researcherItem.title}>
            <ResearcherCard researcher={researcherItem}/>
          </Grid>
        ))
        
        */}

        {listOfResearchers.filter(
          (val) => {
            if(searchValue==""){
              return val;
            }else if(val.Surname.toLowerCase().includes(searchValue.toLowerCase())){
              return val;
            }

            //itemFilter.Surname.toLowerCase().includes(searchValue.toLowerCase())
          }).map((val,key) => {
            return(
              <Grid item xs={3} key={key}>
                 <ResearcherCard researcher={val}/>
             </Grid>
            );
        })}


        

        {
          /* 

            <Grid item xs={4}>
        <ResearcherCard/>
        </Grid>
        <Grid item xs={4}>
        <ResearcherCard/>
        </Grid>
        <Grid item xs={4}>
        <ResearcherCard/>
        </Grid>
        <Grid item xs={4}>
        <ResearcherCard/>
        </Grid>
        <Grid item xs={4}>
        <ResearcherCard/>
        </Grid>


          */
        }
      </Grid>

      
    </Box>



    
  );
}
