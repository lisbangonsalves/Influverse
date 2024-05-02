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
import { NavLink } from 'react-router-dom';







export default function ProductList() {
  const user = JSON.parse(localStorage.getItem("user"))

  const [productData, setProductData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/interface-buisness/${user.business[0].slug}/product/list`
        );
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <Box>
  
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
          component={NavLink}
          to = "/business/gifting/addproduct"
            variant="contained"
            sx={{ backgroundColor: "#161A30" }}
            startIcon={<AddIcon />}
          >
            Add Product
          </Button>
          
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
            {productData.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                  {product.name}
                  </TableCell>
                  <TableCell align="center">
                    <img
                      alt="productimage"
                      src={product.image}
                      width={100}
                    />
                  </TableCell>
                  <TableCell align="center">{product.specification}</TableCell>
                  <TableCell align="center">{product.price}</TableCell>
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
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

    </Box>
  );
}
