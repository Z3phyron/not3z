import axios from "axios";

const API_URL = "https://not3z.herokuapp.com/api/note/";

// Create new post
const addNote = async (noteText, token) => {
  console.log(noteText)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL,{ noteText}, config);

  return response.data;
};

// Get user goals
const getNotes = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};
// Get user goals
const getNote = async (id) => {
  const response = await axios.get(API_URL + id);

  return response.data.data;
};

// Delete user post
const deleteNote = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + id, config);

  return response.data;
};
// Edituser post
// const editNote = async (id, noteData, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.put(`${API_URL}${id}`, noteData, config);

//   return response.data;
// };

const postService = {
  addNote,
  getNotes,
  getNote,
  deleteNote,
  // editNote,
};

export default postService;
