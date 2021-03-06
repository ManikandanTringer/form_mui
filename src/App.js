import React, { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';




function App() {
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [userdetails, setUserDetails] = useState([]);
  const[top,setTop]=useState("same")
  const[id,setId]=useState("")


  const deleteevent = (id) => {
    let userdetailsupdate = userdetails.filter(item => item.id !==id)
    setUserDetails(userdetailsupdate)
  }


  const handlesubmit = (e) => {
    

    if (name, fname, email, phoneno, place) {
      if(top ==="same"){
        let details = {
          id: Math.random(), name, fname, email, phoneno, place
  
        }
        setUserDetails([...userdetails, details]);
      }else if(top==="edit"){
        let usereditdetailsupdate = userdetails.filter(item => item.id !==id)
        let editeddetails={
           id,name,fname,email,phoneno,place
        }
        setUserDetails([...usereditdetailsupdate, editeddetails]);
      }
   
      setName("")
      setFname("")
      setEmail("")
      setPhone("")
      setPlace("")
      setTop("same")
    }
    else {
      alert("enter all the values");
    }

  }
  const editevent=(id)=>{
    console.log(id)
    let usereditdetailsupdate = userdetails.filter(item => item.id ==id)
    console.log(usereditdetailsupdate)
    setName(usereditdetailsupdate[0].name)
    setFname(usereditdetailsupdate[0].fname)
    setEmail(usereditdetailsupdate[0].email)
    setPhone(usereditdetailsupdate[0].phoneno)
    setPlace(usereditdetailsupdate[0].place)
    setId(usereditdetailsupdate[0].id)
    setTop("edit")

  }

  console.log(userdetails);
  return (

    <div className="App">
        <TextField id="name"  value={name} label="Name"  onChange={(e) => setName(e.target.value)} /><br />
        <TextField id="fname" value={fname} label="Father Name"  onChange={(e) => setFname(e.target.value)} /><br />
        <TextField id="email" value={email} label="E-mail"  onChange={(e) => setEmail(e.target.value)} /><br />
        <TextField id="phoneno" value={phoneno} label="Mobile number"  onChange={(e) => setPhone(e.target.value)} /><br />
        <TextField id="place" value={place} label="Place" variant="outlined" onChange={(e) => setPlace(e.target.value)} /><br />
        <Button id="button" variant="contained" color="primary" onClick={handlesubmit}>Submit</Button>
      <br />

      { userdetails.map(eachDetail => {
        return (
          <Card  sx={{ maxWidth: 345, margin: '20px 0 0 180px', padding: '50px' }}>
            
            <CardMedia
              component="img"
              height="100"
              image="data:image/jpeg;base64,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"
              alt="normalimage"
              
              
            />
            

            <CardContent>
              <h4 >Name:{eachDetail.name}
              </h4>
              <h4  >Father Name:{eachDetail.fname}
              </h4>
              <h4 >Email:{eachDetail.email}
              </h4>
              <h4  >Mobile number:{eachDetail.phoneno}
              </h4>
              <h4  >Place:{eachDetail.place}
              </h4>

            </CardContent>
            <Button padding="10px" onClick={ () => deleteevent(eachDetail.id)} >  Delete </Button>
            <Button padding="10px" onClick={ () => editevent(eachDetail.id)} >  Edit </Button>
           
        
           

          </Card>
        )

      })}





    </div>
  );
}

export default App;