import React from "react";
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
import SideBaarDrawer from "@/components/sidebaar/sidebar";
import Navbaar from "@/components/navbaar/navbaar";
import Dropdown from "@/container/Dropdown/dropdown";

const MemberDashboard = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div style={{ display: "flex" }}>
      <SideBaarDrawer />
      <Navbaar>
        <Dropdown />
      </Navbaar>
      <Container sx={{ marginTop: "5%" }}>
        <Grid container spacing={1}>
          <Grid item md={5}>
            <Typography variant="h6" pb={1}>
              Member details
            </Typography>
            <Card
              sx={{
                height: "80%",
                boxShadow: "none",
                borderStyle: "solid",
              }}
            >
              <CardContent sx={{ padding: 0 }}>
                <Typography
                  variant="h6"
                  sx={{
                    backgroundColor: "#1f901f",
                    color: "#fff",
                    padding: "5px",
                  }}
                  textAlign="center"
                >
                  ACTIVE
                </Typography>
                <Grid container spacing={2} padding={3}>
                  <Grid item xs={5}>
                    <Typography variant="body1">
                      <strong>Name</strong>
                    </Typography>
                    <Typography variant="body2" mb={2}>
                      Doe, John
                    </Typography>
                    <Typography variant="body1">
                      <strong>Member ID</strong>
                    </Typography>
                    <Typography variant="body2" mb={2}>
                      1234567890
                    </Typography>
                    <Typography variant="body1">
                      <strong>Address</strong>
                    </Typography>
                    <Typography variant="body2">5100 W Overland Rd,</Typography>
                    <Typography mb={2}> Boise, ID 83705</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="body1">
                      <strong>DOB</strong>
                    </Typography>
                    <Typography variant="body2" mb={2}>
                      01/01/1980
                    </Typography>
                    <Typography variant="body1">
                      <strong>Gender</strong>
                    </Typography>
                    <Typography variant="body2" mb={2}>
                      Male
                    </Typography>
                    <Typography variant="body1">
                      <strong>Status</strong>
                    </Typography>
                    <Typography variant="body2" mb={2}>
                      Married
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1">
                      <strong>Member Type</strong>
                    </Typography>
                    <Typography variant="body2" mb={2}>
                      Basic Membership
                    </Typography>

                    <Typography variant="body1">
                      <strong>Email</strong>
                    </Typography>
                    <Typography variant="body2" mb={2}>
                      John.Doe@gmail.com
                    </Typography>
                    <Typography variant="body1">
                      <strong>Phone</strong>
                    </Typography>
                    <Typography variant="body2" mb={2}>
                      (123) 456-7889
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Subscriber Information */}
          <Grid item md={4}>
            <Typography variant="h6" ml={3} pb={1}>
              Subscriber Information
            </Typography>
            <Card
              sx={{
                padding: 0,
                height: "80%",
                boxShadow: "none",
                borderStyle: "solid",
                marginLeft: "5%",
              }}
            >
              <CardContent>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    <strong>Subscriber Name</strong>
                  </Typography>
                  <Typography variant="body2" mb={2}>
                    Doe, Jane
                  </Typography>
                  <Typography variant="body1">
                    <strong>Subscriber ID</strong>
                  </Typography>
                  <Typography variant="body2" mb={2}>
                    12345
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    <strong>Subscriber DOB</strong>
                  </Typography>
                  <Typography variant="body2" mb={2}>
                    02/03/1982
                  </Typography>
                  <Typography variant="body1">
                    <strong>Relation</strong>
                  </Typography>
                  <Typography variant="body2" mb={2}>
                    Spouse
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Plan Information */}
          <Grid item md={3}>
            <Typography variant="h6" ml={2} pb={1}>
              Plan
            </Typography>
            <Card
              sx={{
                padding: 0,
                height: "80%",
                boxShadow: "none",
                borderStyle: "solid",
                marginLeft: "5%",
              }}
            >
              <CardContent>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    <strong>Plan Type</strong>
                  </Typography>
                  <Typography variant="body2" mb={2}>
                    Basic Plan
                  </Typography>
                  <Typography variant="body1">
                    <strong>Plan ID</strong>
                  </Typography>
                  <Typography variant="body2" mb={2}>
                    12345
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* =============== */}
          {/* benifit */}
          <Grid item md={4}>
            <Card
              sx={{
                height: "auto",
                boxShadow: "none",
                borderStyle: "solid",
              }}
            >
              <CardContent sx={{ padding: "20px 24px" }}>
                <Typography variant="h6" textAlign="center" mb={2}>
                  Benefits
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography variant="body1" mb={2}>
                      <strong>Prior Authorization</strong>
                    </Typography>
                    <Typography variant="body2" mb={1}>
                      Prior Authorization 1
                    </Typography>
                    <Typography variant="body2" mb={1}>
                      Prior Authorization 2
                    </Typography>{" "}
                    <Typography variant="body2" mb={1}>
                      Prior Authorization 3
                    </Typography>{" "}
                    <Typography variant="body2" mb={1}>
                      Prior Authorization 4
                    </Typography>{" "}
                    <Typography variant="body2" mb={1}>
                      Prior Authorization 5
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" mb={2}>
                      <strong>Date</strong>
                    </Typography>
                    <Typography variant="body2" mb={1}>
                      01/31/2024
                    </Typography>
                    <Typography variant="body2" mb={1}>
                      11/22/2023
                    </Typography>{" "}
                    <Typography variant="body2" mb={1}>
                      01/31/2024
                    </Typography>{" "}
                    <Typography variant="body2" mb={1}>
                      11/22/2023
                    </Typography>{" "}
                    <Typography variant="body2" mb={1}>
                      01/31/2024
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={{ padding: "24px" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#03A9F4",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                  fullWidth
                >
                  View All Benefits
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* policy */}
          <Grid item md={4}>
            <Card
              sx={{
                height: "auto",
                boxShadow: "none",
                borderStyle: "solid",
              }}
            >
              <CardContent sx={{ padding: "20px 24px" }}>
                <Typography variant="h6" textAlign="center" mb={2}>
                  Policy Management
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
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
                  </Box>
                  <Box>
                    <Typography variant="body1" mb={2}>
                      <strong>status</strong>
                    </Typography>
                    <Typography variant="body2" mb={1}>
                      Open
                    </Typography>
                    <Typography variant="body2" mb={1} sx={{ color: "green" }}>
                      Paid
                    </Typography>{" "}
                    <Typography variant="body2" mb={1} sx={{ color: "green" }}>
                      Paid
                    </Typography>{" "}
                    <Typography variant="body2" mb={1} sx={{ color: "green" }}>
                      Paid
                    </Typography>{" "}
                    <Typography variant="body2" mb={1} sx={{ color: "green" }}>
                      Paid
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={{ padding: "24px" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#03A9F4",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                  fullWidth
                >
                  Go To Policy Managment
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* claims */}
          <Grid item md={4}>
            <Card
              sx={{
                height: "auto",
                boxShadow: "none",
                borderStyle: "solid",
              }}
            >
              <CardContent sx={{ padding: "20px 24px" }}>
                <Typography variant="h6" textAlign="center" mb={2}>
                  Claims
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography variant="body1" mb={2}>
                      <strong>Claim ID</strong>
                    </Typography>
                    <Typography variant="body2" mb={1}>
                      12345
                    </Typography>
                    <Typography variant="body2" mb={1}>
                      96765
                    </Typography>{" "}
                    <Typography variant="body2" mb={1}>
                      12345
                    </Typography>{" "}
                    <Typography variant="body2" mb={1}>
                      96765
                    </Typography>{" "}
                    <Typography variant="body2" mb={1}>
                      12345
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" mb={2}>
                      <strong>Date</strong>
                    </Typography>
                    <Typography variant="body2" mb={1}>
                      01/31/2024
                    </Typography>
                    <Typography variant="body2" mb={1}>
                      11/22/2023
                    </Typography>{" "}
                    <Typography variant="body2" mb={1}>
                      01/31/2024
                    </Typography>{" "}
                    <Typography variant="body2" mb={1}>
                      11/22/2023
                    </Typography>{" "}
                    <Typography variant="body2" mb={1}>
                      01/31/2024
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" mb={2}>
                      <strong>status</strong>
                    </Typography>
                    <Typography variant="body2" mb={1}>
                      Open
                    </Typography>
                    <Typography variant="body2" mb={1} sx={{ color: "green" }}>
                      Closed
                    </Typography>{" "}
                    <Typography variant="body2" mb={1} sx={{ color: "green" }}>
                      Closed
                    </Typography>{" "}
                    <Typography variant="body2" mb={1} sx={{ color: "green" }}>
                      Closed
                    </Typography>{" "}
                    <Typography variant="body2" mb={1} sx={{ color: "green" }}>
                      Closed
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" mb={2}>
                      <strong>Cost</strong>
                    </Typography>
                    <Typography variant="body2" mb={1}>
                      -
                    </Typography>
                    <Typography variant="body2" mb={1}>
                      $40
                    </Typography>{" "}
                    <Typography variant="body2" mb={1}>
                      $125
                    </Typography>{" "}
                    <Typography variant="body2" mb={1}>
                      $50
                    </Typography>{" "}
                    <Typography variant="body2" mb={1}>
                      $25
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={{ padding: "24px" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#03A9F4",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                  fullWidth
                >
                  View All Claims
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MemberDashboard;
