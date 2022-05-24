
import styled from "styled-components"
import NotesList from "../../components/NotesList";
import { getNotes } from "../../features/note/noteSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Home = (props) => {
  const { searchText } = props;
  
  
  const dispatch = useDispatch();

   useEffect(() => {

       dispatch(getNotes());
     
   }, []);
   const { notes } = useSelector((state) => state.note);
  return (
    
      <Cont>
        <NotesList
          notes={notes}
        //   handleAddNote={addNote}
        //   handleDeleteNote={deleteNote}
        />
      </Cont>

  );
};

const Cont = styled.nav`
  //
`;
// const Pages = styled.div`
//   padding: 5%;
// `;

export default Home;
