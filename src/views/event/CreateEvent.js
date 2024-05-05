import * as React from "react";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-restricted-imports
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
const moment = require("moment");
import { Interest } from "views/data/interest";
import { countries } from "views/data/countries";
import { FormControl, InputLabel } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { styled } from "@mui/material/styles";




const ImageButton = styled("label")(({ theme }) => ({
  position: "relative",
  height: 200,
  width: 200,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid",
  borderColor: theme.palette.primary.main,
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

export default function CreateEvent() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventGoals, setEventGoals] = useState("");
  // const [eventObjectives, setEventObjectives] = useState("");
  const [eventType, setEventType] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [eventCountry, setEventCountry] = useState();
  const [eventBudget, setEventBudget] = useState("");
  const [targetAge, setTargetAge] = useState("");
  const [targetGender, setTargetGender] = useState("");
  const [targetIncomeLevel, setTargetIncomeLevel] = useState("");
  const [targetoccupation, setTargetoccupation] = useState("");
  const [targetCommunicationChannel, setTargetCommunicationChannel] =
    useState("");
  const [targetInterests, settargetInterests] = useState([]);

  const navigate = useNavigate();
 // eslint-disable-next-line
  const [imageFile, setImageFile] = useState(null);

  const handleEventName = (event) => {
    setEventName(event.target.value);
  };
  const handleEventDescription = (event) => {
    setEventDescription(event.target.value);
  };
  const handleEventGoals = (event) => {
    setEventGoals(event.target.value);
  };
  // const handleEventObjectives = (event) => {
  //   setEventObjectives(event.target.value);
  // };
  const handleEventType = (event) => {
    setEventType(event.target.value);
  };
  const handleStartTimeChange = (newTime) => {
    // You can add any validation or processing logic here
    setEventStartTime(newTime); // Assuming `startTime` is a state variable managed by useState
  };

  const handleEndTimeChange = (newTime) => {
    // You can add any validation or processing logic here
    setEventEndTime(newTime); // Assuming `endTime` is a state variable managed by useState
  };
  const handleCountryChange = (event) => {
    const value = event.target.value;
    setEventCountry((prevState) => ({
      ...prevState,
      country: value,
    }));
    // Do something with the selected country
  };

  const handlesetEventBudget = (event) => {
    setEventBudget(event.target.value);
  };
  const handlesetTargetAge = (event) => {
    setTargetAge(event.target.value);
  };
  const handleTargetGender = (event) => {
    setTargetGender(event.target.value);
  };
  const handleTargetIncomeLevel = (event) => {
    setTargetIncomeLevel(event.target.value);
  };
  const handleTargetoccupation = (event) => {
    setTargetoccupation(event.target.value);
  };
  const handleTargetCommunicationChannel = (event) => {
    setTargetCommunicationChannel(event.target.value);
  };
  const handleTargetInterests = (event, value) => {
    settargetInterests(value);
  };

  const handlestartDateChange = (newDate) => {
    const currentDate = dayjs(); // Get the current date
    // Check if newDate is before the current date
    if (newDate.isBefore(currentDate, "day")) {
      // Handle validation error for startDate
      setstartDate({
        value: newDate,
        validationError: "Start date cannot be in the past.",
      });
    } else if (endDate && newDate.isAfter(endDate)) {
      // Check if newDate is after endDate
      // Handle validation error for startDate
      setstartDate({
        value: newDate,
        validationError: "Start date must be before end date.",
      });
    } else {
      // No validation error, update startDate
      setstartDate({
        value: newDate,
      });
    }
  };

  const handleendDateChange = (newDate) => {
    const currentDate = dayjs(); // Get the current date
    // Check if newDate is before the current date
    if (newDate.isBefore(currentDate, "day")) {
      // Handle validation error for endDate
      setendDate({
        value: newDate,
        validationError: "End date cannot be in the past.",
      });
    } else if (startDate && newDate.isBefore(startDate)) {
      // Check if newDate is before startDate
      // Handle validation error for endDate
      setendDate({
        value: newDate,
        validationError: "End date must be after start date.",
      });
    } else {
      // No validation error, update endDate
      setendDate({
        value: newDate,
      });
    }
  };
  const [image, setImage] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(eventStartTime);
      // Assuming your variable is named eventStartTime
      // Extracting relevant date and time components from eventStartTime
      const year = eventStartTime["$y"];
      const month = eventStartTime["$M"] - 1; // Month is zero-based in JavaScript Date objects
      const day = eventStartTime["$D"];
      const hour = eventStartTime["$H"];
      const minute = eventStartTime["$m"];
      const second = eventStartTime["$s"] || 0; // If second is not provided, default to 0
      const millisecond = eventStartTime["$ms"] || 0; // If millisecond is not provided, default to 0
      const jsDate = new Date(
        year,
        month,
        day,
        hour,
        minute,
        second,
        millisecond,
      );

      const Eyear = eventEndTime["$y"];
      const Emonth = eventEndTime["$M"] - 1; // Month is zero-based in JavaScript Date objects
      const Eday = eventEndTime["$D"];
      const Ehour = eventEndTime["$H"];
      const Eminute = eventEndTime["$m"];
      const Esecond = eventEndTime["$s"] || 0; // If second is not provided, default to 0
      const Emillisecond = eventEndTime["$ms"] || 0; // If millisecond is not provided, default to 0
      const EjsDate = new Date(
        Eyear,
        Emonth,
        Eday,
        Ehour,
        Eminute,
        Esecond,
        Emillisecond,
      );
      // Creating a new JavaScript Date object with extracted components

      // Formatting the time string in hh:mm[:ss[.uuuuuu]] format
      const eventStime = `${jsDate.getHours().toString().padStart(2, "0")}:${jsDate.getMinutes().toString().padStart(2, "0")}:${jsDate.getSeconds().toString().padStart(2, "0")}.${jsDate.getMilliseconds().toString().padStart(6, "0")}`;
      const eventEtime = `${EjsDate.getHours().toString().padStart(2, "0")}:${EjsDate.getMinutes().toString().padStart(2, "0")}:${EjsDate.getSeconds().toString().padStart(2, "0")}.${EjsDate.getMilliseconds().toString().padStart(6, "0")}`;

      const user = JSON.parse(localStorage.getItem("user"));
      const formData = new FormData();
    formData.append('image', event.target['image-upload'].files[0]); // Append the image file
    formData.append('name', eventName);
    formData.append('description', eventDescription);
    formData.append('goals', eventGoals);
    formData.append('event_type', [eventType]);
    formData.append('start_date', moment(startDate).format("YYYY-MM-DD"));
    formData.append('end_date', moment(endDate).format("YYYY-MM-DD"));
    formData.append('start_time', eventStime);
    formData.append('end_time', eventEtime);
    formData.append('country', eventCountry.country);
    formData.append('budget', eventBudget);
    formData.append('target_age', targetAge);
    formData.append('target_gender', targetGender);
    formData.append('target_income', targetIncomeLevel);
    formData.append('target_occupation', targetoccupation);
    formData.append('communication_channel', targetCommunicationChannel);
    formData.append('target_interests', JSON.stringify(targetInterests));
      const response = await fetch(
        `https://influverse-backend.onrender.com/api/interface-buisness/${user.business[0].slug}/events/create`,
        {
          method: "POST",
         
          body: formData,
        },
      );
      if (response.ok) {
        navigate("/business/event");
        // Handle success
        console.log("Data sent successfully!");
      } else {
        // Handle error
        console.error("Error while sending data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box sx={{ width: 1 }}>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Box sx={{ width: 1, display: "flex", marginTop: "10px" }}>
          <Grid
            container
            spacing={4}
            rowSpacing={3}
            columnSpacing={{ xs: 2, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: 24, fontWeight: "bold", marginLeft: "5px" }}
                >
                  Create Event
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ width: 1, display: "flex", justifyContent: "center" }}>
                <ImageButton htmlFor="image-upload">
                  <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
      
                  />
                  <ImageSrc
                    style={{
                      backgroundImage: `url(${image})`,
                     
                    }}
                  />
                  <Image>
                    <CameraAltIcon />
                  </Image>
                </ImageButton>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleEventName}
                value={eventName}
                sx={{ width: 1 }}
                id="Event-Name"
                label="Event Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleEventDescription}
                value={eventDescription}
                sx={{ width: 1 }}
                id="Event-Description"
                label="Event Description"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleEventGoals}
                value={eventGoals}
                sx={{ width: 1 }}
                id="Event-Goals-and-Objectives"
                label="Event Goals and Objectives"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <Select
                id="Event-Type"
                sx={{ width: 1 }}
                onChange={handleEventType}
                value={eventType}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Event Type</em>
                </MenuItem>
                <MenuItem value={1}>Product Launch</MenuItem>
                <MenuItem value={2}>Press Conference</MenuItem>
                <MenuItem value={3}>Trade Show</MenuItem>
                <MenuItem value={4}>Webinar</MenuItem>
                <MenuItem value={5}>Workshop</MenuItem>
                <MenuItem value={6}>Networking Event</MenuItem>
                <MenuItem value={7}>Other</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{ width: 1 }} components={["DatePicker"]}>
                  <DatePicker
                    value={startDate}
                    onChange={handlestartDateChange}
                    sx={{ width: 1 }}
                    label="Start Date"
                  />
                  {startDate.validationError && (
                    <p style={{ color: "red" }}>{startDate.validationError}</p>
                  )}
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{ width: 1 }} components={["DatePicker"]}>
                  <DatePicker
                    value={endDate}
                    onChange={handleendDateChange}
                    sx={{ width: 1 }}
                    label="End Date"
                  />
                  {endDate.validationError && (
                    <p style={{ color: "red" }}>{endDate.validationError}</p>
                  )}
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{ width: 1 }} components={["TimePicker"]}>
                  <TimePicker
                    value={eventStartTime}
                    onChange={handleStartTimeChange}
                    sx={{ width: 1 }}
                    label="Basic time picker"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{ width: 1 }} components={["TimePicker"]}>
                  <TimePicker
                    value={eventEndTime}
                    onChange={handleEndTimeChange}
                    sx={{ width: 1 }}
                    label="Basic time picker"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="country-label">Select Country</InputLabel>
                <Select
                  labelId="country-label"
                  id="country"
                  value={eventCountry}
                  label="Select Country"
                  onChange={handleCountryChange}
                >
                  {countries.map((country, index) => (
                    <MenuItem key={index} value={country.name}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <TextField
                onChange={handlesetEventBudget}
                value={eventBudget}
                sx={{ width: 1 }}
                id="Budget-and-Resources"
                label="Budget and Resources"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <Divider />
              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Target Audiances
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Select
                id="Age"
                sx={{ width: 1 }}
                value={targetAge}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={handlesetTargetAge}
              >
                <MenuItem value="">
                  <em>Age</em>
                </MenuItem>
                <MenuItem value={10}>0-10</MenuItem>
                <MenuItem value={20}>10-20</MenuItem>
                <MenuItem value={30}>20-30</MenuItem>
                <MenuItem value={30}>30-40</MenuItem>
                <MenuItem value={30}>40-50</MenuItem>
                <MenuItem value={30}>50-60</MenuItem>
                <MenuItem value={30}>Above 60</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Select
                id="Gender"
                sx={{ width: 1 }}
                value={targetGender}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={handleTargetGender}
              >
                <MenuItem value="">
                  <em>Gender</em>
                </MenuItem>
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Other</MenuItem>
                <MenuItem value={30}>--</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Select
                id="Income-Level"
                sx={{ width: 1 }}
                value={targetIncomeLevel}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={handleTargetIncomeLevel}
              >
                <MenuItem value="">
                  <em>Income Level</em>
                </MenuItem>
                <MenuItem value={10}>
                  Less than ₹3,00,000 (3 lakh) per year
                </MenuItem>
                <MenuItem value={20}>
                  ₹3,00,001 - ₹7,00,000 (3-7 lakhs) per year
                </MenuItem>
                <MenuItem value={30}>
                  ₹7,00,001 - ₹15,00,000 (7-15 lakhs) per year
                </MenuItem>
                <MenuItem value={30}>
                  ₹15,00,001 - ₹30,00,000 (15-30 lakhs) per year
                </MenuItem>
                <MenuItem value={30}>
                  More than ₹30,00,000 (30 lakhs) per year
                </MenuItem>
              </Select>
            </Grid>

            <Grid item xs={6}>
              <TextField
                onChange={handleTargetoccupation}
                value={targetoccupation}
                sx={{ width: 1 }}
                id="Occupation"
                label="Occupation"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                id="Communication-Channels"
                sx={{ width: 1 }}
                value={targetCommunicationChannel}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={handleTargetCommunicationChannel}
              >
                <MenuItem value="">
                  <em>Communication Channels</em>
                </MenuItem>
                <MenuItem value={10}>Instagram</MenuItem>
                <MenuItem value={20}>Facebook</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                sx={{ width: 1 }}
                multiple
                id="tags-filled"
                options={Interest.map((option) => option.title)}
                freeSolo
                onChange={handleTargetInterests}
                value={targetInterests}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      variant="outlined"
                      key={index}
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    sx={{ width: 1 }}
                    placeholder="Interest"
                  />
                )}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: 1,
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" type="submit">
            Make Changes
          </Button>
        </Box>
      </form>
    </Box>
  );
}
