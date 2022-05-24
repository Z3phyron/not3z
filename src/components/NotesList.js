import Note from './Note';
import AddNote from './AddNote';
import moment from "moment"
import { useDispatch } from 'react-redux';
import { deleteNote } from '../features/note/noteSlice';

const NotesList = ({
	notes,
	handleAddNote,
}) => {
  


	return (
    <div className="notes-list">
      {notes &&
        notes.map((note) => (
          <Note
            id={note._id}
            text={note?.content}
            date={moment(note.createdAt).format("DD/MM/YYYY")}
            key={note?._id}
           
          />
        ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
