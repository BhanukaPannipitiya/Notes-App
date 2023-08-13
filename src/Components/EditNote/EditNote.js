import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { updateNotes } from "../../Services/Notes";
import { Close } from "@mui/icons-material";
import "../EditNote/EditNote.css";

const EditNote = ({
  openModal,
  close,
  record,
  action,
  forceReload,
  setForceReload,
}) => {
  const [editPost, setEditPost] = useState({
    index: "",
    UpdateTime: "",
    Title: "",
    Description: "",
    CreatedTime: "",
  });

  useEffect(() => {
    if (action === "edit") {
      setEditPost({
        ...editPost,
        index: record?.index,
        UpdateTime: "",
        Title: record?.Title,
        Description: record?.Description,
        CreatedTime: record.CreatedTime,
      });
    }
  }, [action, forceReload]);

  function handleSaveClick(e) {
    e.preventDefault(e);

    updateNotes({
      id: editPost.index,
      title: editPost.Title,
      description: editPost.Description,
      updateTime: "",
      createdTime: editPost.CreatedTime,
    })
      .then((data) => {
        setEditPost({
          index: "",
          Title: "",
          Description: "",
          UpdateTime: "",
          createdTime: "",
        });
        setForceReload(!forceReload);
      })
      .catch((err) => console.log("Here", err));
  }
  console.log("record", record);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={openModal}
      onClose={() => close()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="Box">
        <Button
          className="btn"
          variant="text"
          direction="row"
          startIcon={<Close />}
          onClick={() => close()}
        ></Button>
        <TextField
          id="modal-modal-title"
          label="Title"
          value={editPost.Title}
          onChange={(e) => {
            setEditPost({
              ...editPost,
              Title: e.target.value,
            });
          }}
        ></TextField>
        <TextField
          id="modal-modal-description"
          sx={{ mt: 2 }}
          label="Description"
          value={editPost.Description}
          onChange={(e) => {
            setEditPost({
              ...editPost,
              Description: e.target.value,
            });
            onclick = { close };
          }}
        ></TextField>
        <Button
          className="btn"
          variant="contained"
          direction="row"
          onClick={(e) => {
            handleSaveClick(e);
            close();
          }}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditNote;
