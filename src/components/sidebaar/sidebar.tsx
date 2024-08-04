import {
  Drawer,
  Toolbar,
  Box,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import { useRouter } from "next/router";
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
const SideBaarDrawer = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Divider sx={{ width: "90%", marginLeft: "5%" }} />
          <Link href="/" style={{ textDecoration: "none", color: currentPath === "/" ? "blueviolet" : "inherit", }}>
            <ListItemButton>
              <ListItemIcon>
                <HeadphonesOutlinedIcon />
                
                <ListItemText
                  primary="Member 360"
                  sx={{ pl: 1, textDecoration: "none",color: currentPath === "/" ? "blueviolet" : "black" }}
                />
              </ListItemIcon>
            </ListItemButton>
          </Link>
          <Divider sx={{ width: "90%", marginLeft: "5%" }} />
          <Link
            href="/overview"
            style={{
              textDecoration: "none",
              color: currentPath === "/overview" ? "blueviolet" : "inherit",
            }}
          >
            <ListItem button key="Overview" sx={{ pl: 4 }}>
              <HomeIcon />
              <ListItemText primary="Overview" sx={{ pl: 1 }} />
              <ListItemIcon></ListItemIcon>
            </ListItem>
          </Link>
          <Divider sx={{ width: "90%", marginLeft: "5%" }} />
          <Link href="/benefits" style={{ textDecoration: "none", color: currentPath === "/benefits" ? "blueviolet" : "inherit", }}>

          <ListItem button key="Benefits" sx={{ pl: 4 }}>
            <HomeIcon />
            <ListItemText primary="Benefits" sx={{ pl: 1 }} />
            <ListItemIcon></ListItemIcon>
          </ListItem>
          </Link>
          <Divider sx={{ width: "90%", marginLeft: "5%" }} />
          <Link href="/policy" style={{ textDecoration: "none", color: currentPath === "/policy" ? "blueviolet" : "inherit", }}>

          <ListItem button key="Policy" sx={{ pl: 4 }}>
            <HomeIcon />
            <ListItemText primary="Policy" sx={{ pl: 1 }} />
            <ListItemIcon></ListItemIcon>
          </ListItem>
          </Link>
          <Divider sx={{ width: "90%", marginLeft: "5%" }} />
          <Link href="/claims" style={{ textDecoration: "none", color: currentPath === "/claims" ? "blueviolet" : "inherit", }}>

          <ListItem button key="Claims" sx={{ pl: 4 }}>
            <HomeIcon />
            <ListItemText primary="Claims" sx={{ pl: 1 }} />
            <ListItemIcon></ListItemIcon>
          </ListItem>
          </Link>
          <Divider sx={{ width: "90%", marginLeft: "5%" }} />
        </Box>
      </Drawer>
    </>
  );
};

export default SideBaarDrawer;
