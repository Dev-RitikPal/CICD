import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "@/container/Dropdown/dropdown";

const Navbaar = (props: any) => {
  const { children } = props;
  console.log("🚀 ~ Navbaar ~ props:", props);
  console.log("🚀 ~ Navbaar ~ children:", children);
  return (
    <>
      {" "}
      <AppBar
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          borderStyle: "solid",
          borderTop: "none",
          boxShadow: "none",
        }}
        className="test"
      >
        <Toolbar sx={{ width: "100%" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Member Dashboard
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            John, Doe
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            1234567890
          </Typography>
          </Typography>
          

          <Dropdown />
          <TextField
            variant="outlined"
            placeholder="Search Enrolle ID"
            size="small"
            style={{ marginRight: "1%" }}
            
          />
          <TextField
            variant="outlined"
            placeholder="Search"
            size="small"
            style={{ width: "30%", marginRight: "1%" }}
            InputProps={{ sx: { borderRadius: 50 } }}
          />
          <Box
            sx={{
              height: "4pc",
              width: "10pc",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "#e4e5f3",
              borderStyle: "solid",
              borderTop: "none",
              borderRight: "none",
              borderBottom: "none",
            }}
          >
            <PersonOutlineOutlinedIcon />
            <NotificationsOutlinedIcon />
            <MenuIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbaar;
