import {
    TableContainer,
    Paper,
    Typography,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
  } from "@mui/material";
  import React from "react";
  import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
  import { Table } from "react-bootstrap";
  
  const InqueryHistoryTable = (props: any) => {
    const { row, column, title } = props;
    return (
      <div>
        <>
          <TableContainer component={Paper} sx={{ mt: 5, boxShadow: "none" }}>
            <Typography variant="h6" sx={{ mt: 4 }}>
              {title}
            </Typography>
            <Table style={{ width: "100%" }}>
              <TableHead>
                <TableRow>
                  {column?.map((item: any) => (
                    <>
                      <TableCell>{item}</TableCell>
                    </>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {!row?.length ? (
                  <Typography> Data Not Found </Typography>
                ) : (
                  row?.map((item: any, index: number) => (
                    <>
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.inquiryType}</TableCell>
                        <TableCell>{item.benefitType}</TableCell>
                        <TableCell>{item.openDate}</TableCell>
                        <TableCell>{item.closedDate}</TableCell>
                        <TableCell>{item.status}</TableCell>
                      </TableRow>
                    </>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      </div>
    );
  };
  
  export default InqueryHistoryTable;