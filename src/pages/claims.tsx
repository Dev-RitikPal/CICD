import React from "react";
import SideBaarDrawer from "../components/sidebaar/sidebar";
import Navbaar from "../components/navbaar/navbaar";
import {
  Typography,
  Container,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
const claims = () => {
  return (
    <div>
      <SideBaarDrawer />
      <Navbaar />
      <Container sx={{ marginTop: "8%" }}>
          <Grid container spacing={3}>

              {/* patient details */}
              <Grid item md={4}>
                <Typography variant="h6" ml={3} pb={1}>
                  Patient Details
                </Typography>
                <Card
                  sx={{
                    padding: 0,
                    height: "80%",
                    boxShadow: "none",
                    borderStyle: "solid",
                  }}
                >
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          <strong>Name</strong>
                        </Typography>
                        <Typography variant="body2" >Doe, Jane</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          <strong>DOB</strong>
                        </Typography>
                        <Typography variant="body2" >01/01/1980</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          <strong>Member Id</strong>
                        </Typography>
                        <Typography variant="body2" >1234567890</Typography>
                      </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1">
                            <strong>Gender</strong>
                          </Typography>
                          <Typography variant="body2" >Male</Typography>
                          </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1">
                            <strong>Address</strong>
                          </Typography>
                          <Typography variant="body2" >5100 W Overland Rd, Boise, ID 83705</Typography>
                        </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              {/* Subscriber Details */}
              <Grid item md={4}>
                <Typography variant="h6" ml={3} pb={1}>
                  Subscriber Details
                </Typography>
                <Card
                  sx={{
                    padding: 0,
                    height: "80%",
                    boxShadow: "none",
                    borderStyle: "solid",
                  }}
                >
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          <strong>Name</strong>
                        </Typography>
                        <Typography variant="body2">Doe, Jane</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          <strong>Member Id</strong>
                        </Typography>
                        <Typography variant="body2">1234567890</Typography>
                      </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1">
                            <strong>Relation</strong>
                          </Typography>
                          <Typography variant="body2">Spouse</Typography>
                          </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1">
                            <strong>Group</strong>
                          </Typography>
                          <Typography variant="body2">098765</Typography>
                        </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={4}></Grid>
          
          {/* =============== */}
          {/* open claim */}
            {/* Closed */}
          <Grid item md={4}>
            <Card
                sx={{
                  height: "100%",
                  boxShadow: "none",
                  borderStyle: "solid",
                  backgroundColor:'#e7084c3b',
                  borderColor:'#e7084c',
                }}
              >
                <CardContent sx={{ padding: 0,position:'relative' }}>
                  <Box sx={{color:'#e7084c',textAlign:"center",position: 'absolute',top: "100%",transform: 'translateY(100%)',left: '0px',right: '0px'}}>
                    <Typography sx={{fontSize:"20px",paddingBottom:'10px'}}>OPEN CLAIM</Typography>
                    <Typography sx={{fontSize:"20px",paddingBottom:'10px'}}>56790</Typography>
                    <Typography>Details for Open Claim cannot be disclosed</Typography>
                  </Box>
                  
                </CardContent>
                
              </Card>
            </Grid>
          {/* Closed */}
          <Grid item md={4}>
            <Card
                sx={{
                  height: "100%",
                  boxShadow: "none",
                  borderStyle: "solid",
                }}
              >
                <CardContent sx={{ padding: 0 }}>
                    <Typography
                      variant="h6"
                      sx={{ backgroundColor: "#1f901f" ,color:'#fff',padding:'5px'}}
                      textAlign="center"
                    >
                    CLOSED
                    </Typography>
                    <Grid container spacing={2} padding={2}>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          <strong>Claim</strong>
                        </Typography>
                        <Typography variant="body2">12345</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          <strong>Date</strong>
                        </Typography>
                        <Typography variant="body2">01/31/2024</Typography>
                      </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1">
                            <strong>Procedure</strong>
                          </Typography>
                          <Typography variant="body2">Hand Surgery</Typography>
                          </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1">
                            <strong>Diagnosis Code</strong>
                          </Typography>
                          <Typography variant="body2">12345</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1">
                            <strong>Covered</strong>
                          </Typography>
                          <Typography variant="body2">$149.89</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1">
                            <strong>Total</strong>
                          </Typography>
                          <Typography variant="body2">$400.11</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1">
                            <strong>CPT</strong>
                          </Typography>
                          <Typography variant="body2">12345</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1">
                            <strong>CPT Description</strong>
                          </Typography>
                          <Typography variant="body2">Descriptionn Here</Typography>
                        </Grid>
                    </Grid>
                  </CardContent>
                <CardActions sx={{padding:'10px 24px',display:'flex',alignItems:'center',gap:'85px'}}>
                    <Typography color="primary">
                     view DOB
                    </Typography>
                    <Typography color="primary">
                     view Provider
                    </Typography> 
                </CardActions>
              </Card>
            </Grid>
          
          {/* Closed */}
          <Grid item md={4}>
            <Card
                sx={{
                  height: "100%",
                  boxShadow: "none",
                  borderStyle: "solid",
                }}
              >
                <CardContent sx={{ padding: 0 }}>
                    <Typography
                      variant="h6"
                      sx={{ backgroundColor: "#1f901f" ,color:'#fff',padding:'5px'}}
                      textAlign="center"
                    >
                    CLOSED
                    </Typography>
                    <Grid container spacing={2} padding={2}>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          <strong>Claim</strong>
                        </Typography>
                        <Typography variant="body2">12345</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          <strong>Date</strong>
                        </Typography>
                        <Typography variant="body2">01/31/2024</Typography>
                      </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1">
                            <strong>Procedure</strong>
                          </Typography>
                          <Typography variant="body2">Hand Surgery</Typography>
                          </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1">
                            <strong>Diagnosis Code</strong>
                          </Typography>
                          <Typography variant="body2">12345</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1">
                            <strong>Covered</strong>
                          </Typography>
                          <Typography variant="body2">$149.89</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1">
                            <strong>Total</strong>
                          </Typography>
                          <Typography variant="body2">$400.11</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1">
                            <strong>CPT</strong>
                          </Typography>
                          <Typography variant="body2">12345</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1">
                            <strong>CPT Description</strong>
                          </Typography>
                          <Typography variant="body2">Descriptionn Here</Typography>
                        </Grid>
                    </Grid>
                  </CardContent>
                <CardActions sx={{padding:'10px 24px',display:'flex',alignItems:'center',gap:'85px'}}>
                  <Typography color="primary">
                     view DOB
                    </Typography>
                    <Typography color="primary">
                     view Provider
                    </Typography> 
                </CardActions>
              </Card>
            </Grid>
            {/*  */}
          </Grid>
        </Container>
    </div>
  );
};

export default claims;
