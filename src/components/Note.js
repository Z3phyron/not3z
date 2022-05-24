import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteNote, getNotes } from "../features/note/noteSlice";

const Note = ({ id, text, date }) => {
  const dispatch = useDispatch();
  const del = () => {
    dispatch(deleteNote(id));
    dispatch(getNotes());
  };
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever onClick={del} className="delete-icon" size="1.5em" />
      </div>
    </div>
  );
};

export default Note;
