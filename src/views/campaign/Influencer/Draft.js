import React, { useState } from "react";
import { Button,  Container, TextField, Typography } from "@mui/material";
import CommentsCard from "./CommentsCard";
import YouTube from "react-youtube";
import { Box } from "@mui/system";
import DescriptionIcon from "@mui/icons-material/Description";
import { Input, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [youtubeLink, setYoutubeLink] = useState("");

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
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles([...files, ...selectedFiles]);
  };

  const clearFile = (fileIndex) => {
    const updatedFiles = files.filter((_, index) => index !== fileIndex);
    setFiles(updatedFiles);
  };

  return (
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
              Draft
            </Typography>
          </Box>
          <Button variant="contained">Submit</Button>
        </Box>
        <Box
          sx={{
            border: "1px solid grey",
            marginTop: "20px",
            padding: "15px",
            borderRadius: "20px",
          }}
        >
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

          <Box>
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
            <Box sx={{ display:"flex", width:1, justifyContent:"center"}}>
            <label htmlFor="videoFile">
              <Button component="span" variant="contained" color="primary">
                {files.length > 0 ? "Add more files" : "Upload Files"}
              </Button>
            </label>
            </Box>
          </Box>
          <Box >
            <Typography>Comments</Typography>
            <CommentsCard/>
            <Box sx={{display:"flex", justifyContent:"flex-end"}}>
            <Button variant="text">Add Comment</Button>
            </Box>

          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
