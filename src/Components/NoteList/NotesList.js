import React from "react";

import "./NotesList.css";
import "../Note/Note.css";
import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";
import NewNote from "../NewNote/NewNote";
import { Grid } from "@mui/material";

const NotesList = ({
  notes,
  handleDeleteNote,
  handleAddNote,
  handleUpdateNote,
  setForceReload,
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <AddNote setForceReload={setForceReload} />
      </Grid>
      {notes.map((note) => (
        <Grid item xs={4}>
          <Note
            key={note.id}
            index={note.id}
            Title={note.title}
            Description={note.description}
            CreatedTime={note.createdTime}
            status={note.status}
            updateTime={note.updateTime}
            handleDeleteNote={handleDeleteNote}
            handleUpdateNote={handleUpdateNote}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default NotesList;
