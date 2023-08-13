import { Add } from "@mui/icons-material";
import { Card, IconButton } from "@mui/material";
import React from "react";
import "../NewNote/NewNote.css";

const NewNote = ({ handleAddNote }) => {
  return (
    <Card style={{ backgroundColor: "#35A29F" }} className="new-note">
      <IconButton
        sx={{ width: "210px" }}
        className="btn-add"
        color=""
        size="large"
        disableFocusRipple
        onClick={() => handleAddNote()}
      >
        <Add sx={{ width: "20px" }} className="btn" />
      </IconButton>
    </Card>
  );
};

export default NewNote;
