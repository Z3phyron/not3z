import React from 'react';
import styled from "styled-components"
import { SignOut ,reset} from "../features/auth/authSlice"
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


const Header = ({ handleToggleDarkMode, user }) => {

	    const navigate = useNavigate();
	const dispatch = useDispatch();
	
	 const signOut = () => {
     dispatch(SignOut());
     dispatch(reset());
     navigate("/");
   };
	return (
		<Cont className='header'>
			<h1>Notes</h1>

			<div className="email">
				{user?.user?.email[0]}
		</div>
			
			<button onClick={signOut}>Sign Out</button>
		</Cont>
	);
};

const Cont = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .email {
	  padding: 10px 20px;
	  border-radius: 10px;
	  text-transform: capitalize;
	  background: rgba(76, 76, 76, 0.23);
	  
	

  }

  button {
	  padding: 7px 15px;
	  outline: none;
	  border: none;
	  border-radius: 8px;
  }
`;

export default Header;
