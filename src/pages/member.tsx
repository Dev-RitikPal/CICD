// src/MemberDashboard.jsx
import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  Container,
  Box,
  TextField,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import SideBaarDrawer from "@/components/sidebaar/sidebar";
import Navbaar from "@/components/navbaar/navbaar";
import CustomTable from "@/components/table/table";
import InqueryHistoryTable from "@/components/table/inqueryHistoryTable";
import Link from "next/link";

const statusLink = () => {
  return (
    <Link
      href="/overview"
      style={{
        textDecoration: "none",
        color: "none",
      }}
    >
      Active
    </Link>
  );
};

const members = [
  {
    name: "Doe, John",
    address: "5100 W Overland Rd, Boise, ID 83705",
    enrolleeId: "4567",
    dob: "01/30/2024",
    status: statusLink(),
  },
  {
    name: "Leanne Graham",
    address: "5100 W Overland Rd, Boise, ID 83705",
    enrolleeId: "4654",
    dob: "01/30/2024",
    status: statusLink(),
  },
  {
    name: "Ervin Howell",
    address: "5100 W Overland Rd, Boise, ID 83705",
    enrolleeId: "8798",
    dob: "01/30/2024",
    status: statusLink(),
  },
  {
    name: "Clementine Bauch",
    address: "5100 W Overland Rd, Boise, ID 83705",
    enrolleeId: "6454",
    dob: "01/30/2024",
    status: statusLink(),
  },
  {
    name: "Patricia Lebsack",
    address: "5100 W Overland Rd, Boise, ID 83705",
    enrolleeId: "8505",
    dob: "01/30/2024",
    status: statusLink(),
  },
];

const inquiries = [
  {
    name: "Doe, John",
    inquiryType: "Benefits",
    benefitType: "Durable Medical Equipment",
    openDate: "01/30/2024",
    closedDate: "02/02/2024",
    status: "Active",
  },
  {
    name: "Leanne Graham",
    inquiryType: "Benefits",
    benefitType: "Durable Medical Equipment",
    openDate: "01/30/2024",
    closedDate: "02/02/2024",
    status: "Active",
  },
  {
    name: "Ervin Howell",
    inquiryType: "Benefits",
    benefitType: "Durable Medical Equipment",
    openDate: "01/30/2024",
    closedDate: "02/02/2024",
    status: "Active",
  },
  {
    name: "Clementine Bauch",
    inquiryType: "Benefits",
    benefitType: "Durable Medical Equipment",
    openDate: "01/30/2024",
    closedDate: "02/02/2024",
    status: "Active",
  },
  {
    name: "Patricia Lebsack",
    inquiryType: "Benefits",
    benefitType: "Durable Medical Equipment",
    openDate: "01/30/2024",
    closedDate: "02/02/2024",
    status: "Active",
  },
];
const drawerWidth = 240;

const MemberDashboard = () => {
  const [showTable, setShowTable] = React.useState(false);
  const [showInqueryTable, setShowInqueryTable] = React.useState(false);
  const [filteredMemberList, setFilteredMemberList] = React.useState({
    firstName: "",
    lastName: "",
    rollId: "",
  });
  const [filteredMembers, setFilteredMembers] = useState(members);
  const [filteredInquries, setFilteredInquries] = useState(inquiries);
  const handleFilterClick = () => {
    setFilteredMembers(
      members.filter(
        (member) =>
          member.name
            .toLowerCase()
            .includes(filteredMemberList.firstName.toLowerCase()) &&
          member.name
            .toLowerCase()
            .includes(filteredMemberList.lastName.toLowerCase()) &&
          member.enrolleeId.includes(filteredMemberList.rollId)
      )
    );
    setShowTable(true);
  };
  const clearFilter = () => {
    setFilteredMemberList({
      firstName: "",
      lastName: "",
      rollId: "",
    });
    setFilteredMembers(members);
    setShowTable(false);
  };
  const handleClick = (name: string) => {
    setFilteredInquries(inquiries?.filter((member) => member.name === name));
    setShowInqueryTable(true);
  };
  return (
    <div style={{ display: "flex" }}>
      <SideBaarDrawer />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, width: "100%" }}
      >
        <Navbaar />
        <Toolbar />
        <Container>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
              Hi Susie,
            </Typography>
            <Typography variant="h4" gutterBottom>
              Welcome back to Member 360
            </Typography>
            <Typography variant="h6" sx={{ marginTop: "3%" }}>
              Search for member below
            </Typography>
            <Grid
              container
              spacing={2}
              display="flex"
              justifyContent="space-between"
            >
              <Grid
                item
                justifyContent="space-between"
                display="flex"
                width="73%"
              >
                <TextField
                  label="Enter first name"
                  variant="outlined"
                  size="small"
                  style={{ width: "32%" }}
                  value={filteredMemberList.firstName}
                  onChange={(e) =>
                    setFilteredMemberList({
                      ...filteredMemberList,
                      firstName: e.target.value,
                    })
                  }
                />
                <TextField
                  label="Enter last name"
                  variant="outlined"
                  size="small"
                  style={{ width: "32%" }}
                  value={filteredMemberList.lastName}
                  onChange={(e) =>
                    setFilteredMemberList({
                      ...filteredMemberList,
                      lastName: e.target.value,
                    })
                  }
                />
                <TextField
                  label="Enter Enrollee ID"
                  variant="outlined"
                  size="small"
                  style={{ width: "32%" }}
                  value={filteredMemberList.rollId}
                  onChange={(e) =>
                    setFilteredMemberList({
                      ...filteredMemberList,
                      rollId: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  width: "25%",
                  justifyContent: "space-between",
                }}
              >
                <Button variant="contained" onClick={() => handleFilterClick()}>
                  Search for Member
                </Button>
                <Button variant="text" onClick={() => clearFilter()}>
                  clear
                </Button>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
            {Boolean(
              Object.values(filteredMemberList).filter((item) => item != "")
                .length
            ) &&
              showTable && (
                <CustomTable
                  row={filteredMembers}
                  column={["Name", "Address", "Enrollee ID", "DOB", "Status"]}
                  title="Member list"
                  handleClick={handleClick}
                />
              )}
            {showInqueryTable && (
              <InqueryHistoryTable
                row={filteredInquries}
                column={[
                  "Name",
                  "InquiryType",
                  "BenefitType",
                  "OpenDate",
                  "ClosedDate",
                  "Status",
                ]}
                title="Inquiry History"
              />
            )}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default MemberDashboard;
