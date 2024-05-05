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
import { Box } from "@mui/system";
import DescriptionIcon from "@mui/icons-material/Description";
import { Input, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useParams } from "react-router-dom";

function Draft() {
  const [files, setFiles] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = useState("");
  const [campaignData, setCampaignData] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const { slug, id } = useParams();
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [buttonStatus, setButtonStatus] = useState("Submit");
  const [buttonColor, setButtonColor] = useState("primary");
  const user = JSON.parse(localStorage.getItem("user"));

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
        },
      );

      const videoUrl = firstResponse.data.Success;
      setLoading(false);

      const secondResponse = await axios.post(
        `https://influverse-backend.onrender.com/api/interface-influence/${user.influencer[0].slug}/campaign-work/campaign/${id}/`,
        {
          video: videoUrl,
          comments: comment,
        },
      );

      console.log("Second Response:", secondResponse.data);
      setSubmitting(false);
      setButtonStatus("Submitted");
      setButtonColor("success");
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
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
        // setLoading(false);
      });
    setLoading(true);

    axios
      .get(
        `https://influverse-backend.onrender.com/api/interface-influence/influencer/${user.influencer[0].id}/influencer-campaign-work/${id}/`,
      )
      .then((response) => {
        setResponseData(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
        setLoading(true);
      });
  }, [id, slug]);

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
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={submitting}
              color={buttonColor}
            >
              {submitting ? "Submitting..." : buttonStatus}
            </Button>
          </Box>
          <Box
            sx={{
              border: "1px solid grey",
              marginTop: "20px",
              paddingX: "15px",
              paddingY: "10px",
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
                marginY: "10px",
              }}
            >
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                Upload Additional Videos Here
              </Typography>
              <Divider sx={{ marginY: "10px" }} />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 1,
                }}
              >
                {responseData && responseData.video ? (
                  <video controls height={400}>
                    {/* Empty track element to satisfy accessibility requirement */}
                    <track
                      kind="captions"
                      src=""
                      label="No captions available"
                    />
                    <source src={responseData.video} type="video/mp4" />
                  </video>
                ) : null}
              </Box>
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
                    <Button
                      component="span"
                      variant="contained"
                      color="primary"
                    >
                      Upload Files
                    </Button>
                  </label>
                )}
              </Box>
            </Box>

            <Box sx={{ marginY: "10px" }}>
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                Comments
              </Typography>
              <Divider sx={{ marginY: "10px" }} />
              {responseData && responseData.comments ? (
                <CommentsCard
                  comment={responseData.comments}
                  name={responseData.influencer.name}
                  image={responseData.influencer.image}
                />
              ) : (
                <Typography>
                  No comment by {responseData?.influencer?.name}
                </Typography>
              )}

              {comment ? (
                <CommentsCard
                  comment={comment}
                  name={user.influencer[0].name}
                  image={user.influencer[0].image}
                />
              ) : responseData && responseData.marketer_response ? (
                <CommentsCard
                  comment={responseData.marketer_response}
                  name={responseData.campaign.name}
                  image={responseData.campaign.image}
                />
              ) : (
                <Typography> No comment</Typography>
              )}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="text" onClick={handleClickOpen}>
                  Add Comment
                </Button>
              </Box>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Comment here</DialogTitle>
                <DialogContent>
                  <TextField
                    id="commentTextField"
                    multiline
                    rows={6}
                    sx={{ width: "500px", marginTop: "10px" }}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleSendComment}>Add Comment</Button>
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
