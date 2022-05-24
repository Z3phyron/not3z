import React from "react";
import { Navigate, Outlet} from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";


const ProtectedRoutes = ({ props: any }) => {

    const { user, isLoading } = useSelector((state) => state.auth);
    console.log(user);

  
  if (!user) {
    return <Navigate to="/signup" />;
  }



  
  // useEffect(() => {
  //   if (user) {
  //     if (user.token * 1000 < Date.now()) {
  //     localStorage.removeItem("AUTH_TOKEN");
  //     localStorage.removeItem("USER");

  //   }
  //   } 
  // }, []);



  return (
    <Page>
      <Outlet />
    </Page>
  );
};

const Page = styled.div`


  @media screen and (max-width: 900px) {
    padding-left: 0;
  }
`;

export default ProtectedRoutes;
