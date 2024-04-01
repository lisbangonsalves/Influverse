import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddProduct from "./AddProduct";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const [open, setOpen] = React.useState(false);
  const [editopen, setEditOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleEditOpen = () => {
    setEditOpen(true);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <React.Fragment>
        <Box
          sx={{
            paddingBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
            Influencer Gifting Product List
          </Typography>
          <Button
            onClick={handleClickOpen}
            variant="contained"
            sx={{ backgroundColor: "#161A30" }}
            startIcon={<AddIcon />}
          >
            Add Product
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: "form",
              onSubmit: (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(formData.entries());
                const email = formJson.email;
                console.log(email);
                handleClose();
              },
            }}
          >
            <DialogTitle>Add Product</DialogTitle>
            <DialogContent>
              <AddProduct />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Add Product</Button>
            </DialogActions>
          </Dialog>
        </Box>
        <Box
          sx={{
            paddingBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            id="outlined-basic"
            placeholder="Explore Influvencers"
            variant="outlined"
            sx={{ width: "75%", borderColor: "#161a30", borderWidth: "2px" }}
          />
          <FormControl sx={{ width: "22%" }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={filter}
              label="Age"
              // onChange={handleChange}
            >
              <FormGroup>
                <MenuItem value={10}>
                  <FormControlLabel control={<Checkbox />} label="Label" />
                </MenuItem>
                <MenuItem value={20}>
                  <FormControlLabel control={<Checkbox />} label="Required" />
                </MenuItem>
                <MenuItem value={30}>
                  <FormControlLabel control={<Checkbox />} label="Required" />
                </MenuItem>
              </FormGroup>
            </Select>
          </FormControl>
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Specification</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">
                    <img
                      alt="productimage"
                      src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      width={100}
                    />
                  </TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                  <TableCell align="right">
                    <Box>
                      <IconButton
                        aria-label="delete"
                        size="large"
                        sx={{
                          marginRight: "20px",
                          "&:hover": { backgroundColor: "red", color: "white" },
                        }}
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        onClick={handleEditOpen}
                        aria-label="delete"
                        size="large"
                        sx={{
                          "&:hover": {
                            backgroundColor: "#161A30",
                            color: "white",
                          },
                        }}
                      >
                        <CreateIcon fontSize="inherit" />
                      </IconButton>
                      <Dialog
                        open={editopen}
                        onClose={handleEditClose}
                        PaperProps={{
                          component: "form",
                          onSubmit: (event) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries(
                              formData.entries(),
                            );
                            const email = formJson.email;
                            console.log(email);
                            handleClose();
                          },
                        }}
                      >
                        <DialogTitle>Add Product</DialogTitle>
                        <DialogContent>
                          <AddProduct />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleEditClose}>Cancel</Button>
                          <Button type="submit">Add Product</Button>
                        </DialogActions>
                      </Dialog>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    </Box>
  );
}
