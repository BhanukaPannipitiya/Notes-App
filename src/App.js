import React, { useEffect, useState } from "react";
import NotesList from "./Components/NoteList/NotesList";
import "./App.css";
import Search from "./Components/Search/Search";
import { getNotes, deleteNotes } from "./Services/Notes";
import EditNote from "./Components/EditNote/EditNote";

const App = () => {
  const [notes, setNotes] = useState([
    {
      Title: "",
      description: "",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [manageNoteModal, setManageNoteModal] = useState({
    isVisible: false,
    action: undefined,
    record: undefined,
  });
  const [manageAddNoteModal, setManageAddNoteModal] = useState({
    isVisible: false,
    action: undefined,
  });
  const [forceReload, setForceReload] = useState(false);
  useEffect(() => {
    getNotes()
      .then((data) => {
        setNotes(data);
      })
      .catch((e) => console.log("error", e));
  }, [forceReload]);

  const deleteNote = (id) => {
    deleteNotes({ id })
      .then((data) => {
        setForceReload(!forceReload);
      })
      .catch((e) => console.log("error", e));
  };

  const updateNote = (data) => {
    console.log("Clicked", data);
    setManageNoteModal({
      ...manageNoteModal,
      isVisible: true,
      record: data,
      action: "edit",
    });
  };
  console.log(manageNoteModal);
  return (
    <div className="container">
      <h1 className="h1">Notes</h1>
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes}
        handleDeleteNote={deleteNote}
        handleUpdateNote={updateNote}
        setForceReload={setForceReload}
      />
      {manageNoteModal.isVisible && (
        <EditNote
          openModal={manageNoteModal.isVisible}
          action={manageNoteModal.action}
          record={manageNoteModal.record}
          setForceReload={setForceReload}
          close={() => {
            setManageNoteModal((prevData) => ({
              ...prevData,
              isVisible: false,
              record: undefined,
              action: undefined,
            }));
          }}
        />
      )}
    </div>
  );
};

export default App;
