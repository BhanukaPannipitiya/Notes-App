import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Delete, Edit } from "@mui/icons-material";
import "./Note.css";
import dateFormat from "../../Utils/dateFormat";

const Note = ({
  index,
  Title,
  Description,
  CreatedTime,
  UpdateTime,
  Status,
  handleDeleteNote,
  handleUpdateNote,
}) => {
  return (
    <Card key={index} style={{ backgroundColor: "#D4E2D4" }} className="note">
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
          {Title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {Description}
        </Typography>
      </CardContent>

      <CardActions className="card-action">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {dateFormat(CreatedTime)}
        </Typography>
        <Button
          className="btn"
          variant="text"
          direction="row"
          startIcon={<Edit />}
          onClick={() =>
            handleUpdateNote({ index, Title, Description, UpdateTime, Status })
          }
        ></Button>
        <Button
          className="btn"
          variant="text"
          direction="row"
          startIcon={<Delete />}
          onClick={() => handleDeleteNote(index)}
        ></Button>
      </CardActions>
    </Card>
  );
};

export default Note;
