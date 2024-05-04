import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import CommentsCard from "./CommentsCard";
import MessageCard from "./MessageCard";
import YouTube from "react-youtube";
import { Box } from "@mui/system";
import DescriptionIcon from "@mui/icons-material/Description";
import { Input, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useParams } from "react-router-dom";



function Draft() {
  const [youtubeLink, setYoutubeLink] = useState("");
  const [files, setFiles] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = useState("");
  const [campaignData, setCampaignData] = useState(null);
  const { slug,id } = useParams();
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"))

  const handleChange = (event) => {
    setYoutubeLink(event.target.value);
  };

  // Extract video ID from YouTube link
  const extractVideoId = (link) => {
    const url = new URL(link);
    const videoId = url.searchParams.get("v");
    return videoId;
  };

  const opts = {
    width: "100%",
  };

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles([...files, ...selectedFiles]);
  };

  const clearFile = (fileIndex) => {
    const updatedFiles = files.filter((_, index) => index !== fileIndex);
    setFiles(updatedFiles);
  };



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendComment = () => {
    // This function updates the comment state with the text from the dialog
    setOpen(false);
    setComment(document.getElementById("commentTextField").value);
  };


  const handleSubmit = async () => {
    if (files.length === 0) {
      console.log("No files selected");
      return;
    }
  
    setSubmitting(true);
  
    const formData = new FormData();
    formData.append("file", files[0]);
  
    try {
      setLoading(true);
      const firstResponse = await axios.post(
        "http://localhost:7000/api/avatar",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      const videoUrl = firstResponse.data.Success;
      setLoading(false);
  
      const secondResponse = await axios.post(
        `https://influverse-backend.onrender.com/api/interface-influence/${user.influencer[0].slug}/campaign-work/campaign/${id}/`,
        {
          video: videoUrl,
          comments: comment,
        }
      );
  
      console.log("Second Response:", secondResponse.data);
  
      // Reset form state after successful submission
      setFiles([]);
      setYoutubeLink("");
      setComment("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };
  

  useEffect(() => {
    setLoading(true);
    // Fetch event data from the API
    axios
      .get(
        `https://influverse-backend.onrender.com/api/interface-buisness/${slug}/campaigns/${id}`,
      )
      .then((response) => {
        setCampaignData(response.data); // Update state with fetched data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
        setLoading(false);
      });


  }, [ id, slug]);



  return (
    <React.Fragment>
    <Container maxWidth="md">
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: 1,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DescriptionIcon />
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              Campaign Draft
            </Typography>
          </Box>
          <Button variant="contained" onClick={handleSubmit} disabled={submitting}>
          {submitting ? "submitting..." : "Submit"}
          </Button>
        </Box>
        <Box
          sx={{
            border: "1px solid grey",
            marginTop: "20px",
            padding: "15px",
            borderRadius: "20px",
          }}
        >
          <Box>
          {loading ? (
                <Typography>Loading...</Typography>
              ) : campaignData ? (
                <MessageCard
                  message={campaignData.message}
                  name={campaignData.name}
                />
              ) : null}
          </Box>
          <Divider />
          <Box
            sx={{
              backgroundColor: "white",
              padding: "15px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            <Typography>Past Youtube Video Link Here</Typography>

            <TextField
              fullWidth
              label="Paste YouTube Link"
              variant="outlined"
              value={youtubeLink}
              onChange={handleChange}
              margin="normal"
            />
            {youtubeLink && (
              <YouTube opts={opts} videoId={extractVideoId(youtubeLink)} />
            )}
          </Box>

          <Box
            sx={{
              backgroundColor: "white",
              padding: "15px",
              borderRadius: "10px",
              marginY: "10px",
            }}
          >
            <Typography>Upload Additional Videos Here</Typography>
            {files.length === 0 && (
              <Box
                sx={{
                  width: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginY: "10px",
                }}
              >
                <Typography>Nothing Uploaded yet</Typography>
              </Box>
            )}
            <Input
              type="file"
              id="videoFile"
              accept="video/*"
              onChange={handleFileChange}
              multiple
              style={{ display: "none" }}
            />
            {files.map((file, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ flex: 1 }}>{file.name}</div>
                <IconButton onClick={() => clearFile(index)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            ))}
            <Box sx={{ display: "flex", width: 1, justifyContent: "center" }}>
            {files.length === 0 && (
                <label htmlFor="videoFile">
                  <Button component="span" variant="contained" color="primary">
                    Upload Files
                  </Button>
                </label>
              ) }
            </Box>
          </Box>

          <Divider />

          <Box sx={{ marginY: "10px" }}>
            <Typography>Comments</Typography>
            {comment ? <CommentsCard comment={comment} /> : <Typography>No comment</Typography>}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="text" onClick={handleClickOpen} >Add Comment</Button>
            </Box>
            <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add Comment here</DialogTitle>
        <DialogContent>
          
        <TextField
          id="commentTextField"
          multiline
          rows={6}
          sx={{width:"500px", marginTop:"10px"}}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSendComment} >Send</Button>
        </DialogActions>
      </Dialog>
          </Box>
        </Box>
      </Box>
    </Container>
    </React.Fragment>
  );
}

export default Draft;
