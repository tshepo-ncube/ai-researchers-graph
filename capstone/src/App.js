import DrawerAppBar from './components/Appbar';
import './App.css';
import FullWidthTextField from './components/SearchField';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ResearchersGrid from './components/ResearchersGrid';
import { List } from '@mui/material';
 
import ListItem from '@mui/material/ListItem';
import TrendingList from './components/TrendingList';

import Modal from './components/CreateResearcherPopUp';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import "./components/ResearcherPopUp.css";
import React, { useState } from "react";
import Axios from 'axios'

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
   
};

function App() {

  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");


   const [surname, setSur] = useState("");
   const [initials, setIni] = useState("");
   const [title, setTit] = useState("");
   

   const [secondaryField, setSec] = useState("");
   const [primaryField, setPrim] = useState("");

   const [institution, setIns] = useState("");
   const [rating, setRat] = useState("");
   const [specialisations, setSpec] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  function handleSurnameChange(event) {
    setSur(event.target.value);
  }
  function handleInitChange(event) {
    setIni(event.target.value);
  }
  function handleTitChange(event) {
    setTit(event.target.value);
  }
  function handleInsChange(event) {
    setIns(event.target.value);
  }
  function handleRatChange(event) {
    setRat(event.target.value);
  }

  function handleSpecChange(event) {
    setSpec(event.target.value);
  }

  function handleSecChange(event) {
    setSec(event.target.value);
  }

  function handlePrimChange(event) {
    setPrim(event.target.value);
  }

  

   

  function handleSearch(event){
    setSearch(event.target.value);
    //console.log(event.target.value);
  }
  
  function addResearcher(){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'JWT fefege...'
    }

    Axios.post("http://localhost:3000/researchers",{
      "Surname": surname,
      "initials": initials,
      "title": title,
      "institution": institution,
        "secondary_field":  secondaryField,
        "primary_field":  primaryField,
      "rating": rating,
      "specialisation": specialisations
    },{
      headers:headers
    }
    ).then((response) => {
      //setListOfResearchers(response.data)
      
      setIni("")
      setIns("")
      setRat("")
      setSpec("")

      setPrim("")
      setSec("")

      setTit("")
      setSur("")
      window.location.reload()
    })
  }


 


  return (
    <div className="App">
       
       
 <Grid container spacing={2}>
            <Grid item xs={12}>
              <DrawerAppBar/>
            </Grid>
            <Grid item xs={12} sx={{marginTop:5}}>
            <h1>Community</h1>
            </Grid>
            <Grid item xs={12} >
                <center>
                  <FullWidthTextField onChangeSearch={handleSearch}/>
                </center>
                
            </Grid>
           
            <Grid item xs={12}>
                <ResearchersGrid searchValue={search}/>
            </Grid>
            
      </Grid>

     

    {
      
      <Fab variant="extended" style={style} onClick={toggleModal} >
        <AddIcon sx={{ mr: 1 }} />
        Add researcher
      </Fab>

      
    }
      

       {
        /*
        <Modal/>
        */
       
        }

    {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 style={{marginTop:70}}>Add Researcher</h2>
            {
              /*
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            */}
            <TextField id="standard-basic" label="surname" variant="standard" value={surname} onChange={handleSurnameChange} />
            <TextField id="standard-basic" label="initials" variant="standard" value={initials} onChange={handleInitChange}/>
            <TextField id="standard-basic" label="title" variant="standard" value={title} onChange={handleTitChange}/>
            <TextField id="standard-basic" label="institution" variant="standard" value={institution} onChange={handleInsChange}/>

            <TextField id="standard-basic" label="primary field" variant="standard" value={primaryField} onChange={handlePrimChange}/>
            <TextField id="standard-basic" label="secondary field" variant="standard" value={secondaryField} onChange={handleSecChange}/>


            <TextField id="standard-basic" label="rating" variant="standard" value={rating} onChange={handleRatChange}/>
            <TextField id="standard-basic" label="specialisations" variant="standard" value={specialisations} onChange={handleSpecChange}/>
            
            <Button variant="contained" onClick={addResearcher} style={{marginTop:15}} >Add Researcher</Button>
            <button className="close-modal" onClick={toggleModal} >
              CLOSE
            </button>
          </div>
        </div>
      )}

     


         
    </div>
  );
}

export default App;
