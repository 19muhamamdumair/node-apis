import * as React from "react";

import { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import IconButton from "@mui/material/IconButton";


import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import AvatarDropdown from "./AvatarDropDown";

const drawerWidth = 240;



export default function Navbar(props) {
  const {  } = props;
  // const [mobileOpen, setMobileOpen] = useState<any>(false);
  const [user, setUser] = useState();

  useEffect(() => {
    // setUser(getLocalStorageServices.getLocalStorageObject("user"));
  }, []);
  const handleDrawerToggle = () => {
    props.openMobile(!props.mobileOpenValue)
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className="navbar-set"
        sx={{
          backgroundColor: "white",
       
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ marginLeft: "auto", marginRight: "1em", display: "flex" }}>
            <AvatarDropdown /> 
          </Box>
        </Toolbar>
      </AppBar>

    </Box>
  );
}
