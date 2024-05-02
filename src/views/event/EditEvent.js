import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
// eslint-disable-next-line no-restricted-imports
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import axios from "axios"; // Import axios for making HTTP requests
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const moment = require('moment');

export default function EditEvent() {

    const navigater = useNavigate();

const { id } = useParams();
  const [eventData, setEventData] = useState(null); 
  console.log(eventData)
  const userx = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    // Fetch event data from the API
    axios
      .get(
        `http://127.0.0.1:8000/api/interface-buisness/${userx.business[0].slug}/events/${id}`,
      )
      .then((response) => {
        setEventData(response.data); // Update state with fetched data
        navigater(`/business/event/edit-event/${id}`);
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });
  }, [id, userx.slug , navigater]);




 
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventGoals, setEventGoals] = useState("");
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
  const [targetCommunicationChannel, setTargetCommunicationChannel] = useState("");
  const [targetInterests, settargetInterests] = useState([]);

  useEffect(() => {
    if (eventData) {
      setEventName(eventData.name);
      setEventDescription(eventData.description);
      setEventGoals(eventData.goals); 
      setEventType(eventData.event_type);
      setEventCountry(eventData.country);
    //   setEventBudget(eventData.event_budget);
    setTargetAge(eventData.target_age);
    setTargetGender(eventData.target_gender);
    setTargetIncomeLevel(eventData.target_income);
    setTargetoccupation(eventData.target_occupation);
    setEventCountry(eventData.country);
    setTargetCommunicationChannel(eventData.communication_channel);
    settargetInterests(eventData.target_interests);



    }
  }, [eventData]); 



  const navigate = useNavigate();
  
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
  const handleEventCountry = (event, newValue) => {
    setEventCountry(prevState => ({
      ...prevState,
      country: newValue.label
    }));
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


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      
      
      
      
      
      
      
      
      
      console.log(eventStartTime)
// Assuming your variable is named eventStartTime
// Extracting relevant date and time components from eventStartTime
const year = eventStartTime['$y'];
const month = eventStartTime['$M'] - 1; // Month is zero-based in JavaScript Date objects
const day = eventStartTime['$D'];
const hour = eventStartTime['$H'];
const minute = eventStartTime['$m'];
const second = eventStartTime['$s'] || 0; // If second is not provided, default to 0
const millisecond = eventStartTime['$ms'] || 0; // If millisecond is not provided, default to 0
const jsDate = new Date(year, month, day, hour, minute, second, millisecond);


const Eyear = eventEndTime['$y'];
const Emonth = eventEndTime['$M'] - 1; // Month is zero-based in JavaScript Date objects
const Eday = eventEndTime['$D'];
const Ehour = eventEndTime['$H'];
const Eminute = eventEndTime['$m'];
const Esecond = eventEndTime['$s'] || 0; // If second is not provided, default to 0
const Emillisecond = eventEndTime['$ms'] || 0; // If millisecond is not provided, default to 0
const EjsDate = new Date(Eyear, Emonth, Eday, Ehour, Eminute, Esecond, Emillisecond);
// Creating a new JavaScript Date object with extracted components

// Formatting the time string in hh:mm[:ss[.uuuuuu]] format
const eventStime = `${jsDate.getHours().toString().padStart(2, '0')}:${jsDate.getMinutes().toString().padStart(2, '0')}:${jsDate.getSeconds().toString().padStart(2, '0')}.${jsDate.getMilliseconds().toString().padStart(6, '0')}`;
const eventEtime = `${EjsDate.getHours().toString().padStart(2, '0')}:${EjsDate.getMinutes().toString().padStart(2, '0')}:${EjsDate.getSeconds().toString().padStart(2, '0')}.${EjsDate.getMilliseconds().toString().padStart(6, '0')}`;




      
      
      const user = JSON.parse(localStorage.getItem('user'))
      const response = await fetch(`http://127.0.0.1:8000/api/interface-buisness/${user.slug}/events/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name:eventName,
          description:eventDescription,
          goals:eventGoals,
          event_type:[eventType],
        start_date:moment(startDate).format('YYYY-MM-DD') ,
        end_date:moment(endDate).format('YYYY-MM-DD') ,
        start_time: eventStime,
        end_time: eventEtime,
        country:eventCountry.country,
        budget:eventBudget,
        target_age:targetAge,
        target_gender:targetGender,
        target_income:targetIncomeLevel,
        target_occupation:targetoccupation,
        communication_channel:targetCommunicationChannel,
        target_interests:targetInterests
        }),
      });
      if (response.ok) {
        navigate("/view/event");
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
  if (eventData && eventData.validationError) {
    // Access validationError property
   console.log(eventData.validationError);
  }

  if (!eventData) {
    return <div>Loading...</div>; // Render loading state until data is fetched
  }

  return (
    <Box sx={{ width: 1 }}>
      <form onSubmit={handleSubmit}>
      <Box sx={{ width: 1, display: "flex", marginTop: "50px" }}>
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
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Create Event</Typography>
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
                   value={endDate } 
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
                <TimePicker value={eventStartTime} onChange={handleStartTimeChange} sx={{ width: 1 }} label="Basic time picker" />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer sx={{ width: 1 }} components={["TimePicker"]}>
                <TimePicker value={eventEndTime} onChange={handleEndTimeChange} sx={{ width: 1 }} label="Basic time picker" />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
          <Autocomplete
             
             onChange={handleEventCountry}
            value={eventCountry}
                id="country-select-demo"
                sx={{ width: 1 }}
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                 
                    {...params}
                    sx={{ width: 1 }}
                    label="Choose a country"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Target Audiances</Typography>
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

const Interest = [
  { title: "Parenting Tips and Advice" },
  { title: "Family Activities" },
  { title: "Child Development" },
  { title: "Pregnancy and Childbirth" },
  { title: "Parenting Blogs" },
  { title: "Environmental Conservation" },
  { title: "Human Rights" },
  { title: "Social Justice" },
  { title: "Animal Welfare" },
  { title: "Community Service" },
  { title: "Personal Finance Management" },
  { title: "Stock Market Investing" },
  { title: "Cryptocurrency" },
  { title: "Financial Planning" },
  { title: "Entrepreneurship" },
  { title: "Self-help and Motivation" },
  { title: "Goal Setting" },
  { title: "Time Management" },
  { title: "Leadership Development" },
  { title: "Public Speaking" },
  { title: "Gardening" },
  { title: "Birdwatching" },
  { title: "Camping" },
  { title: "Fishing" },
  { title: "Nature Photography" },
  { title: "Fiction" },
  { title: "Non-fiction" },
  { title: "Book Clubs" },
  { title: "Poetry" },
  { title: "Literary Events" },
  { title: "Meditation and Mindfulness" },
  { title: "Nutrition and Healthy Eating" },
  { title: "Mental Health Awareness" },
  { title: "Alternative Medicine" },
  { title: "Holistic Wellness" },
  { title: "Gadgets and Devices" },
  { title: "Coding and Programming" },
  { title: "Tech Startups" },
  { title: "Virtual Reality (VR)" },
  { title: "Artificial Intelligence (AI)" },
  { title: "Cooking and Baking" },
  { title: "Food Photography" },
  { title: "Culinary Arts" },
  { title: "Recipe Development" },
  { title: "Food Blogging" },
  { title: "Playing Instruments" },
  { title: "Singing" },
  { title: "Dance" },
  { title: "Theater" },
  { title: "Concerts and Music Festivals" },
  { title: "Video Games" },
  { title: "Board Games" },
  { title: "Esports" },
  { title: "Streaming" },
  { title: "Cosplay" },
  { title: "Painting and Drawing" },
  { title: "Photography" },
  { title: "Pottery and Ceramics" },
  { title: "DIY Projects" },
  { title: "Crafting" },
  { title: "Travel Photography" },
  { title: "Hiking and Trekking" },
  { title: "Adventure Sports" },
  { title: "Backpacking" },
  { title: "Cultural Experiences" },
  { title: "Fitness Training" },
  { title: "Running" },
  { title: "Yoga" },
  { title: "Cycling" },
  { title: "Martial Arts" },
  { title: "Makeup" },
  { title: "Skincare" },
  { title: "Fashion Design" },
  { title: "Beauty Influencers" },
  { title: "Hairstyling" },
];


const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  {
    code: "CA",
    label: "Canada",
    phone: "1",
    suggested: true,
  },
  {
    code: "CC",
    label: "Cocos (Keeling) Islands",
    phone: "61",
  },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
  },
  {
    code: "CF",
    label: "Central African Republic",
    phone: "236",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  { code: "CK", label: "Cook Islands", phone: "682" },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CM", label: "Cameroon", phone: "237" },
  { code: "CN", label: "China", phone: "86" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "CR", label: "Costa Rica", phone: "506" },
  { code: "CU", label: "Cuba", phone: "53" },
  { code: "CV", label: "Cape Verde", phone: "238" },
  { code: "CW", label: "Curacao", phone: "599" },
  { code: "CX", label: "Christmas Island", phone: "61" },
  { code: "CY", label: "Cyprus", phone: "357" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  {
    code: "DE",
    label: "Germany",
    phone: "49",
    suggested: true,
  },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1-767" },
  {
    code: "DO",
    label: "Dominican Republic",
    phone: "1-809",
  },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "EH", label: "Western Sahara", phone: "212" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "FI", label: "Finland", phone: "358" },
  { code: "FJ", label: "Fiji", phone: "679" },
  {
    code: "FK",
    label: "Falkland Islands (Malvinas)",
    phone: "500",
  },
  {
    code: "FM",
    label: "Micronesia, Federated States of",
    phone: "691",
  },
  { code: "FO", label: "Faroe Islands", phone: "298" },
  {
    code: "FR",
    label: "France",
    phone: "33",
    suggested: true,
  },
  { code: "GA", label: "Gabon", phone: "241" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "GD", label: "Grenada", phone: "1-473" },
  { code: "GE", label: "Georgia", phone: "995" },
  { code: "GF", label: "French Guiana", phone: "594" },
  { code: "GG", label: "Guernsey", phone: "44" },
  { code: "GH", label: "Ghana", phone: "233" },
  { code: "GI", label: "Gibraltar", phone: "350" },
  { code: "GL", label: "Greenland", phone: "299" },
  { code: "GM", label: "Gambia", phone: "220" },
  { code: "GN", label: "Guinea", phone: "224" },
  { code: "GP", label: "Guadeloupe", phone: "590" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  { code: "GR", label: "Greece", phone: "30" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
  },
  { code: "GT", label: "Guatemala", phone: "502" },
  { code: "GU", label: "Guam", phone: "1-671" },
  { code: "GW", label: "Guinea-Bissau", phone: "245" },
  { code: "GY", label: "Guyana", phone: "592" },
  { code: "HK", label: "Hong Kong", phone: "852" },
  {
    code: "HM",
    label: "Heard Island and McDonald Islands",
    phone: "672",
  },
  { code: "HN", label: "Honduras", phone: "504" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HT", label: "Haiti", phone: "509" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IM", label: "Isle of Man", phone: "44" },
  { code: "IN", label: "India", phone: "91" },
  {
    code: "IO",
    label: "British Indian Ocean Territory",
    phone: "246",
  },
  { code: "IQ", label: "Iraq", phone: "964" },
  {
    code: "IR",
    label: "Iran, Islamic Republic of",
    phone: "98",
  },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "JE", label: "Jersey", phone: "44" },
  { code: "JM", label: "Jamaica", phone: "1-876" },
  { code: "JO", label: "Jordan", phone: "962" },
  {
    code: "JP",
    label: "Japan",
    phone: "81",
    suggested: true,
  },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KG", label: "Kyrgyzstan", phone: "996" },
  { code: "KH", label: "Cambodia", phone: "855" },
  { code: "KI", label: "Kiribati", phone: "686" },
  { code: "KM", label: "Comoros", phone: "269" },
  {
    code: "KN",
    label: "Saint Kitts and Nevis",
    phone: "1-869",
  },
  {
    code: "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
  },
  { code: "KR", label: "Korea, Republic of", phone: "82" },
  { code: "KW", label: "Kuwait", phone: "965" },
  { code: "KY", label: "Cayman Islands", phone: "1-345" },
  { code: "KZ", label: "Kazakhstan", phone: "7" },
  {
    code: "LA",
    label: "Lao People's Democratic Republic",
    phone: "856",
  },
  { code: "LB", label: "Lebanon", phone: "961" },
  { code: "LC", label: "Saint Lucia", phone: "1-758" },
  { code: "LI", label: "Liechtenstein", phone: "423" },
  { code: "LK", label: "Sri Lanka", phone: "94" },
  { code: "LR", label: "Liberia", phone: "231" },
  { code: "LS", label: "Lesotho", phone: "266" },
  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "LY", label: "Libya", phone: "218" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "MC", label: "Monaco", phone: "377" },
  {
    code: "MD",
    label: "Moldova, Republic of",
    phone: "373",
  },
  { code: "ME", label: "Montenegro", phone: "382" },
  {
    code: "MF",
    label: "Saint Martin (French part)",
    phone: "590",
  },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MH", label: "Marshall Islands", phone: "692" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { code: "ML", label: "Mali", phone: "223" },
  { code: "MM", label: "Myanmar", phone: "95" },
  { code: "MN", label: "Mongolia", phone: "976" },
  { code: "MO", label: "Macao", phone: "853" },
  {
    code: "MP",
    label: "Northern Mariana Islands",
    phone: "1-670",
  },
  { code: "MQ", label: "Martinique", phone: "596" },
  { code: "MR", label: "Mauritania", phone: "222" },
  { code: "MS", label: "Montserrat", phone: "1-664" },
  { code: "MT", label: "Malta", phone: "356" },
  { code: "MU", label: "Mauritius", phone: "230" },
  { code: "MV", label: "Maldives", phone: "960" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "NA", label: "Namibia", phone: "264" },
  { code: "NC", label: "New Caledonia", phone: "687" },
  { code: "NE", label: "Niger", phone: "227" },
  { code: "NF", label: "Norfolk Island", phone: "672" },
  { code: "NG", label: "Nigeria", phone: "234" },
  { code: "NI", label: "Nicaragua", phone: "505" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "NP", label: "Nepal", phone: "977" },
  { code: "NR", label: "Nauru", phone: "674" },
  { code: "NU", label: "Niue", phone: "683" },
  { code: "NZ", label: "New Zealand", phone: "64" },
  { code: "OM", label: "Oman", phone: "968" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PF", label: "French Polynesia", phone: "689" },
  { code: "PG", label: "Papua New Guinea", phone: "675" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "PL", label: "Poland", phone: "48" },
  {
    code: "PM",
    label: "Saint Pierre and Miquelon",
    phone: "508",
  },
  { code: "PN", label: "Pitcairn", phone: "870" },
  { code: "PR", label: "Puerto Rico", phone: "1" },
  {
    code: "PS",
    label: "Palestine, State of",
    phone: "970",
  },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "PW", label: "Palau", phone: "680" },
  { code: "PY", label: "Paraguay", phone: "595" },
  { code: "QA", label: "Qatar", phone: "974" },
  { code: "RE", label: "Reunion", phone: "262" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "RU", label: "Russian Federation", phone: "7" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SB", label: "Solomon Islands", phone: "677" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SH", label: "Saint Helena", phone: "290" },
  { code: "SI", label: "Slovenia", phone: "386" },
  {
    code: "SJ",
    label: "Svalbard and Jan Mayen",
    phone: "47",
  },
  { code: "SK", label: "Slovakia", phone: "421" },
  { code: "SL", label: "Sierra Leone", phone: "232" },
  { code: "SM", label: "San Marino", phone: "378" },
  { code: "SN", label: "Senegal", phone: "221" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SR", label: "Suriname", phone: "597" },
  { code: "SS", label: "South Sudan", phone: "211" },
  {
    code: "ST",
    label: "Sao Tome and Principe",
    phone: "239",
  },
  { code: "SV", label: "El Salvador", phone: "503" },
  {
    code: "SX",
    label: "Sint Maarten (Dutch part)",
    phone: "1-721",
  },
  {
    code: "SY",
    label: "Syrian Arab Republic",
    phone: "963",
  },
  { code: "SZ", label: "Swaziland", phone: "268" },
  {
    code: "TC",
    label: "Turks and Caicos Islands",
    phone: "1-649",
  },
  { code: "TD", label: "Chad", phone: "235" },
  {
    code: "TF",
    label: "French Southern Territories",
    phone: "262",
  },
  { code: "TG", label: "Togo", phone: "228" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "TJ", label: "Tajikistan", phone: "992" },
  { code: "TK", label: "Tokelau", phone: "690" },
  { code: "TL", label: "Timor-Leste", phone: "670" },
  { code: "TM", label: "Turkmenistan", phone: "993" },
  { code: "TN", label: "Tunisia", phone: "216" },
  { code: "TO", label: "Tonga", phone: "676" },
  { code: "TR", label: "Turkey", phone: "90" },
  {
    code: "TT",
    label: "Trinidad and Tobago",
    phone: "1-868",
  },
  { code: "TV", label: "Tuvalu", phone: "688" },
  {
    code: "TW",
    label: "Taiwan",
    phone: "886",
  },
  {
    code: "TZ",
    label: "United Republic of Tanzania",
    phone: "255",
  },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "UG", label: "Uganda", phone: "256" },
  {
    code: "US",
    label: "United States",
    phone: "1",
    suggested: true,
  },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  {
    code: "VA",
    label: "Holy See (Vatican City State)",
    phone: "379",
  },
  {
    code: "VC",
    label: "Saint Vincent and the Grenadines",
    phone: "1-784",
  },
  { code: "VE", label: "Venezuela", phone: "58" },
  {
    code: "VG",
    label: "British Virgin Islands",
    phone: "1-284",
  },
  {
    code: "VI",
    label: "US Virgin Islands",
    phone: "1-340",
  },
  { code: "VN", label: "Vietnam", phone: "84" },
  { code: "VU", label: "Vanuatu", phone: "678" },
  { code: "WF", label: "Wallis and Futuna", phone: "681" },
  { code: "WS", label: "Samoa", phone: "685" },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];
