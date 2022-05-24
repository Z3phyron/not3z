import { useState, useEffect } from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import { useSelector, useDispatch } from "react-redux";
import ResetPassword from "./pages/auth/ResetPassword";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ProtectedRoutes from "./ProtectedRoutes";
import { getNotes } from "./features/note/noteSlice";

const App = () => {
  // const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const dispatch = useDispatch();

  const { user, isLoading } = useSelector((state) => state.auth);

 
  console.log(user);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      {user && <Header handleToggleDarkMode={setDarkMode} user={user} />}
      {user && <Search handleSearchNote={setSearchText} />}

      <Routes>
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/resetPassword/:token" exact element={<ResetPassword />} />
        <Route path="/forgotPassword" exact element={<ForgotPassword />} />
        <Route path="/" exact element={<ProtectedRoutes />}>
          <Route
            path="/"
            exact
            element={
              <Home
                // searchText={searchText}
                //   handleAddNote={addNote}
                //   handleDeleteNote={deleteNote}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
