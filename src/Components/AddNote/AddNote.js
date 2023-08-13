import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Dialog, IconButton, TextField } from "@mui/material";
import { postNotes } from "../../Services/Notes";
import "../Note/Note.css";
import "../AddNote/AddNote.css";
import "../NoteList/NotesList.css";
import { Add, Close } from "@mui/icons-material";

const AddNote = ({ forceReload, setForceReload }) => {
  const [open, setOpen] = useState(false);

  const [post, setPost] = useState({
    createdTime: "",
    title: "",
    description: "",
  });

  const functionOpenPopUp = () => {
    setOpen(true);
  };

  const functionClosePopUp = () => {
    setOpen(false);
  };

  function handleSaveClick() {
    console.log(post);
    postNotes({
      createdTime: "",
      title: post.title,
      description: post.description,
      Status: "",
    })
      .then((data) => {
        setPost({
          createdTime: "",
          title: "",
          description: "",
        });
        setForceReload(!forceReload);
      })
      .catch((err) => console.log("Here", err));
  }

  return (
    <div>
      <Card style={{ backgroundColor: "#35A29F" }} className="new-note">
        <IconButton
          className="btn-add"
          color=""
          size="large"
          disableFocusRipple
          onClick={functionOpenPopUp}
        >
          <Add className="btn" />
        </IconButton>
      </Card>
      <Dialog open={open}>
        <Card style={{ backgroundColor: "#35A29F" }} className="note">
          <Button
            className="btn"
            variant="text"
            direction="row"
            startIcon={<Close />}
            onClick={() => functionClosePopUp()}
          ></Button>
          <CardContent className="note-content">
            <TextField
              id="outlined-textarea"
              placeholder="Add a title...."
              onChange={(e) => {
                setPost({
                  ...post,
                  title: e.target.value,
                });
              }}
              autoFocus
              value={post.title}
            />
            <TextField
              id="outlined-textarea"
              placeholder="Type a note to add...."
              multiline
              onChange={(e) => {
                setPost({
                  ...post,
                  description: e.target.value,
                });
              }}
              autoFocus
              value={post.description}
            />
          </CardContent>

          <CardActions className="card-action">
            <Button
              className="btn"
              variant="contained"
              direction="row"
              onClick={() => {
                handleSaveClick();
                functionClosePopUp();
              }}
            >
              Save
            </Button>
          </CardActions>
        </Card>
      </Dialog>
    </div>
  );
};

export default AddNote;
