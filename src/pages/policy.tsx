import Navbaar from '@/components/navbaar/navbaar'
import SideBaarDrawer from '@/components/sidebaar/sidebar'
import React from 'react'
import {
  Typography,
  Container,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const policy = () => {
  return (
    <div>
      <SideBaarDrawer/><Navbaar />
        <Container sx={{ marginTop: "8%" }}>
          <Grid container spacing={3}>
            {/* patient details */}
              <Grid item md={12} pb={3}>
                <Box sx={{display:'flex',justifyContent:"space-between",alignItems:'center',paddingBottom:'20px'}}>
                  <Typography variant="h5">
                    Billing & Preminum
                  </Typography>
                  <Button variant="contained" sx={{width:'250px'}}>Order ID Card</Button>
                </Box>
                <Card
                  sx={{
                    padding: 0,
                    height: "auto",
                    boxShadow: "none",
                    borderStyle: "solid",
                  }}
                >
                  <CardContent sx={{padding:'24px'}}>
                    <Grid container spacing={2} pb={2}>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                          <strong>Name</strong>
                        </Typography>
                        <Typography variant="body2" >Doe, Jane</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                          <strong>DOB</strong>
                        </Typography>
                        <Typography variant="body2" >01/01/1980</Typography>
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid container spacing={2} pb={2}>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                          <strong>Home Address</strong>
                        </Typography>
                        <Typography variant="body2" >5100 W Overland Rd, Boise, ID 83705</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                          <strong>Mailing Address</strong>
                        </Typography>
                        <Typography variant="body2" >5100 W Overland Rd, Boise, ID 83705</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                          <strong>Email Address</strong>
                        </Typography>
                        <Typography variant="body2" >John,A,Doe@ggmail.com</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                          <strong>Cell Phone</strong>
                        </Typography>
                        <Typography variant="body2" >(987)654-3211</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                          <strong>Work Phone</strong>
                        </Typography>
                        <Typography variant="body2" >(987)654-3211</Typography>
                      </Grid>
                    </Grid>
                      {/*  */}
                    <Grid container spacing={2} pb={2}>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                          <strong>Card Type</strong>
                        </Typography>
                        <Typography variant="body2" >Matercard</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                          <strong>Number</strong>
                        </Typography>
                        <Typography variant="body2" >****4567</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography variant="body1">
                          <strong>Expire</strong>
                        </Typography>
                        <Typography variant="body2" >01/27</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography variant="body1">
                          <strong>CSV</strong>
                        </Typography>
                        <Typography variant="body2" >123</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                          <strong>Tax Credit</strong>
                        </Typography>
                        <Typography variant="body2" >$1000</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                          <strong>Automatic Billing</strong>
                        </Typography>
                        <Typography variant="body2" >YES</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                          <strong>Billingg In Suspense</strong>
                        </Typography>
                        <Typography variant="body2" >$997</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              {/* COBs */}
              <Grid item md={2}>
                <Typography variant="h6"  pb={1}>
                  COBs
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
                      <Box pb={2}>
                        <Typography variant="body1" pb={1}>
                        <strong>Carrier</strong>
                      </Typography>
                        <Typography variant="body2" >A</Typography>
                      </Box>
                      <Box>
                        <Typography variant="body1" pb={1}>
                        <strong>Policy ID</strong>
                        </Typography>
                        <Typography variant="body2" >01234</Typography>
                      </Box>
                    </CardContent>
                  </Card>
              </Grid>
              {/* COBs */}
              <Grid item md={6}>
                <Typography variant="h6"  pb={1}>
                  Payments
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
                    <Box  sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Box>
                    <Typography variant="body1" mb={2}>
                        <strong>Month</strong>
                    </Typography>
                      
                    <Typography variant="body2" mb={1}>
                      January 2024
                      </Typography>
                      <Typography variant="body2" mb={1}>
                      December 2023
                      </Typography>{" "}
                      <Typography variant="body2" mb={1}>
                      November 2023
                      </Typography>{" "}
                      <Typography variant="body2" mb={1}>
                      October 2023 
                      </Typography>{" "}
                      <Typography variant="body2" mb={1}>
                      September 2023
                      </Typography>
                      <Typography variant="body2" mb={1}>
                      August 2023
                      </Typography>
                    </Box>
                    <Box>
                    <Typography variant="body1" mb={2}>
                        <strong>Premium</strong>
                      </Typography>
                        
                        <Typography variant="body2" mb={1}>
                        $48.00
                        </Typography>
                        <Typography variant="body2" mb={1}>
                        $48.00 
                        </Typography>{" "}
                        <Typography variant="body2" mb={1}>
                        $48.00
                        </Typography>{" "}
                        <Typography variant="body2" mb={1}>
                        $48.00
                        </Typography>{" "}
                        <Typography variant="body2" mb={1}>
                        $48.00
                        </Typography>
                        <Typography variant="body2" mb={1}>
                        $48.00
                        </Typography>
                    </Box>
                    <Box>
                    <Typography variant="body1" mb={2}>
                        <strong>status</strong>
                      </Typography>
                        
                        <Typography variant="body2" mb={1}>
                        Open
                        </Typography>
                        <Typography variant="body2" mb={1} sx={{color:'green'}}>
                          Paid
                        </Typography>{" "}
                        <Typography variant="body2" mb={1} sx={{color:'green'}}>
                        Paid
                        </Typography>{" "}
                        <Typography variant="body2" mb={1} sx={{color:'green'}}>
                        Paid
                        </Typography>{" "}
                        <Typography variant="body2" mb={1} sx={{color:'green'}}>
                        Paid
                        </Typography>
                        <Typography variant="body2" mb={1} sx={{color:'green'}}>
                        Paid
                        </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body1" mb={2} sx={{visibility:"hidden"}}>
                        <strong>h</strong>
                      </Typography>
                        
                        <Typography variant="body2" mb={1}>
                        <OpenInNewIcon sx={{height:'15px'}}/>
                        </Typography>
                        <Typography variant="body2" mb={1}>
                        <OpenInNewIcon sx={{height:'15px'}}/>
                        </Typography>
                        <Typography variant="body2" mb={1}>
                        <OpenInNewIcon sx={{height:'15px'}}/>
                        </Typography>
                        <Typography variant="body2" mb={1}>
                        <OpenInNewIcon sx={{height:'15px'}}/>
                        </Typography>
                        <Typography variant="body2" mb={1}>
                        <OpenInNewIcon sx={{height:'15px'}}/>
                        </Typography>
                        <Typography variant="body2" mb={1}>
                        <OpenInNewIcon sx={{height:'15px'}}/>
                        </Typography>
                    </Box>
                  </Box>
                    </CardContent>
                  </Card>
              </Grid>
             {/*  */}
             <Grid item md={4}>
                <Typography variant="h6" pb={1}>PCP</Typography>
                <Card
                  sx={{
                    height: "80%",
                    boxShadow: "none",
                    borderStyle: "solid",
                  }}
                >
                  <CardContent sx={{ padding: 0 }}>
                 
                    <Grid container spacing={2} padding={3}>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          <strong>Name</strong>
                        </Typography>
                        <Typography variant="body2" mb={2}>
                          Dr.Josaph Do
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                      <Typography variant="body1">
                          <strong>In Network</strong>
                        </Typography>
                        <Typography variant="body2" mb={2}>
                          Yes
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          <strong>Phone</strong>
                        </Typography>
                        <Typography variant="body2">
                          (123)456-7890
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          <strong>Email</strong>
                        </Typography>
                        <Typography variant="body2">
                          J.Deo@pcp.com
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          <strong>Mailing Address</strong>
                        </Typography>
                        <Typography variant="body2">
                          5100 W Overland Rd, Boise, ID 83705</Typography>
                      </Grid>


                    </Grid>
                  </CardContent>
                </Card>
              </Grid>



            </Grid>
          </Container>
    </div>
  )
}

export default policy