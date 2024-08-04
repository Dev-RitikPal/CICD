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

const CustomTable = (props: any) => {
  const { row, column, title, handleClick } = props;
  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 5, boxShadow: "none" }}>
        <Typography variant="h6" sx={{ mt: 4 }}>
          {title}
        </Typography>
        <Table style={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
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
                    <TableCell sx={{ width: "10px" }}>
                      <AddOutlinedIcon sx={{ marginTop: "5px" }} />
                    </TableCell>
                    <TableCell onClick={() => handleClick(item.name)}>
                      {item.name}
                    </TableCell>
                    <TableCell>{item.address}</TableCell>
                    <TableCell>{item.enrolleeId}</TableCell>
                    <TableCell>{item.dob}</TableCell>
                    <TableCell>{item.status}</TableCell>
                  </TableRow>
                </>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CustomTable;
