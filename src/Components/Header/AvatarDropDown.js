import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Typography } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function AvatarDropdown() {
const navigate=useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open,setOpen]=useState(false)
  const [user, setUser] = useState();
  const [name,setName]=useState([])


  useEffect(() => {

    setUser(JSON.parse( localStorage.getItem("user")));

    
  
  },[])
  useEffect(()=>{
    let Uname=user?.name?.split(" ");
    setName(Uname)
    console.log(Uname)
  },[user])
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open)
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(!open)
  };

  const hanldeLogout=()=>{
    
    
    axios.post("http://localhost:5000/api/logout",{refresh_token:user.refresh_token}, {
      headers: {
        Authorization: 'Bearer ' + user?.access_token //the token is a variable which holds the token
      },
      
     })
    .then((res) => {
     localStorage.removeItem("user")
        navigate('/login')
    })
    .catch((err)=>console.log(err))
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
      >
         <Avatar alt="Travis Howard me-5" src="/static/images/avatar/2.jpg" sx={{color:'black',backgroundColor:'#47959e'}} > {name?.[0]?.charAt(0)}{name?.[1]?.charAt(0)}</Avatar>
         <Typography color='black' sx={{textTransform:'none',marginLeft:"8px"}}>
         {/* {user?.firstname + " "+ user?.lastname}
          */}
          {user?.name}
         </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{  
          style: {  
            width: 150,  
          },  
       }} 
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={hanldeLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
